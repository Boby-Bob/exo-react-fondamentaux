class App extends React.Component {
    state = {
        name: "",
        message: "",
        comments: []
    }

    nameInput = event => {
        console.log(event.target.value);
        this.setState({
            name: event.target.value,
        })
    }
    messageInput = event => {
        console.log(event.target.value);
        this.setState({
            message: event.target.value,
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        let addComment = [];
        addComment[0] = this.state;
        console.log(addComment);
    }
    

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Say Something</p>
                <label>
                    <input type="text" name="name"
                    placeholder="Your Name" 
                    value={this.state.name} 
                    onChange={this.nameInput}
                    />
                </label>
                <label>
                    <textarea type="text" name="message" 
                    rows="6" placeholder="Your Comment" 
                    value={this.state.message} onChange={this.messageInput}>    
                    </textarea>
                </label>
                <input type="submit" value="Comment"/>
             </form>
        );
    }
}
 
ReactDOM.render(<App/>,document.getElementById("app"));