import { Component } from "react"

export default class StateDemo extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Rahul'
        }
    }

    render() {
        // setState example
        setTimeout(() => {
            this.setState({ name: "Rahul G Rao" });
        }, 3000);
        return (
            <div>
                <span>Name: {this.state.name}</span>
            </div>
        )
    }
}