import React, { Component } from 'react'
import Spinner from '../../common/Spinner'
class PublicStories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            story:[]
        }
    }
    componentWillMount(){
        fetch('/stories')
        .then(res => res.json())
        .then(story =>this.setState({story}))
        .catch(err => {
            console.log("fetch not work");
        })
    }
    render() {
        if (
            this.state.story === undefined ||
            Object.keys(this.state.story).length === 0
          ) {
            return <Spinner />;
          }
          else{
        return (
            <div>
            <div className="text-center" style={{margin:"50px"}}> 
                    <h1><strong>These are some of the feedback from our students</strong></h1>
            </div>
            <div className="stories">
                {this.state.story.map(stories =>
                    <div class="card text-center" key={stories._id} style={{width:"350px"}}>
                        <div class="card-header">
                        {stories.title}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{stories.status}</h5>
                            <p class="card-text">{stories.body}</p>
                            <p className="card-text">This story by {stories.user.firstName} {stories.user.lastName}</p>
                        </div>
                        <div class="card-footer text-muted">
                            {stories.date}
                        </div>
                    </div> )}
            </div>
            </div>
        )}
    }
}

export default PublicStories;
