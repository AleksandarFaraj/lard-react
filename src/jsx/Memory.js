import React from "react";
import alphabet from "alphabet"
export class Memory extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        var thead = [<th key="thead#">#</th>];
        //gethead
        for (var i = 0; i < this.props.size.x; i++) {
            thead.push(<th key={"thead"+i}>{i}</th>);
        }
        var tbody = [];
        //getRow+rowheader, can be optimized, but is ugly
        for (var j = 0; j < this.props.size.y; j++) {
            var trow = [<th scope="row" key={"y"+j+"header"}>{alphabet.upper[j]}</th>];
            for (var i = 0; i < this.props.size.x; i++) {
                trow.push(<td key={"y"+j+"x"+i}>j:{j}i:{i}</td>);
            }
            tbody.push(<tr key={"row"+j}>{trow}</tr>);
        }
        return <div className="memory">
            Memory
            <table className="table table-sm">
                <thead>
                <tr>
                    {thead}
                </tr>
                </thead>
                <tbody>
                {tbody}
                </tbody>

            </table>
        </div>
    }
}