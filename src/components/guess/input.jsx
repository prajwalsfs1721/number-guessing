import React from 'react';
import './input.scss'
import { History } from '../history/history';
import FormInput from '../form-input/form-input';
class InputBox extends React.Component {
    constructor({ min = 1, max = 100 }) {
        super();
        this.state = {
            number: '',
            max: max,
            min: min,
            display: false,
            arr: []
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    onSubmit = () => (
       this.state.arr.push(this.state.number)
    );
    handleChange = (e) => {
        var num = parseInt(e.target.value)
        if (isNaN(num) || num < this.state.min || num > this.state.max) {
            num = '';
            this.setState({
                number: num,
                display: true
            });
        }
        else
            this.setState({
                display: false
            });
        this.setState({ number: num });
    }

    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.onSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        label='Enter number'
                        name='number'
                        type='number'
                        value={this.state.number}
                        required
                    />
                    <div
                        style={
                            {
                                color: 'red',
                                fontSize: '20px',
                            }
                        }>
                        {this.state.display ? 'Number is not in range' : null}
                    </div>
                    <button type='submit'className={` custom-button`}
                     >
                        Submit
                    </button>
                </form>
                </div>
                <History arr={this.state.arr} />
            </div>
        )
    }

};

export default InputBox;