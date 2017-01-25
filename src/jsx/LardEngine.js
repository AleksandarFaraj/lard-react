import React from "react";
import {Memory} from "./Memory";
export class LardEngine extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (<div className="lard-container">
                <div className="column">
                    <Memory size={{x:5,y:4}}/>
                    <div className="instruction-log">
                        Instruction Log
                        <instructions>
                            <instruction>

                            </instruction>
                        </instructions>
                    </div>
                </div>
                <div className="column">
                    <div className="assembly-tree">
                        Assembly tree
                        <assemblies>
                            <assembly>
                                1
                            </assembly>
                        </assemblies>
                    </div>
                    <div className="current-instruction">
                        Current instruction
                    </div>
                </div>
                <div className="column">
                    <div className="code-area">
                        Code
                        <textarea></textarea>
                        <button>Run</button>
                        <button>Step</button>
                    </div>
                </div>
            </div>
        );
    }
}