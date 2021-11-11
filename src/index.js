import React from "react";
import ReactDOM from "react-dom";
import marked from "marked";

import "./index.css";

class App extends React.Component {
  state = {
    output: marked(mardown),
    newText: mardown,
  };

  createMarkup(text) {
    return {
      __html: text,
    };
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({ newText: value });
    this.setState({ output: marked(value) });
  }

  render() {
    return (
      <div class="bloc">
        <h1 id="title">Markdown Previewer</h1>
        <h2>Mardown Editor</h2>
        <textarea
          id="editor"
          onChange={this.handleChange.bind(this)}
          placeholder="ee"
          value={this.state.newText}
        ></textarea>
        <h2>Markdown Previewer</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={this.createMarkup(this.state.output)}
        ></div>
      </div>
    );
  }
}

const mardown = `# This is a h1 title 
## This is a h2 title
This is my  [portofolio](https://ulysse28.github.io/Portofolio-Ulysse-Valdenaire/),
inline code, \`<div></div>\`
\`\`\`
// this is multi-line code:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
> This is a block quote
- This is a list
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
And this is **bold text** !
`;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
