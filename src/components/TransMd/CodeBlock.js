import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage('jsx', jsx);

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={duotoneDark}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

export default CodeBlock;

// npmjs.com/package/react-syntax-highlighter