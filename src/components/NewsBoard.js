import React from 'react';

class NewsBoard extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render () {
    return (
      <div className="news-board">
        <table className={`${this.props.mode}-mode-table`}>
          <tbody>
            <tr className="news-board__title">
              <td>1. </td>
              <td>
                Reverse Engineering the PLA Chip in the Commodore 128
                <span className="grey-text">&nbsp;(klobie.com)</span>
              </td>
            </tr>
            <tr className="news-board__subtext">
              <td colSpan="1"></td>
              <td colSpan="11" className="news-board__subtext_desc">
                3 points by pseudolus 7 minutes ago
              </td>
            </tr>

            <tr className="news-board__title">
              <td>2. </td>
              <td>
                Reverse Engineering the PLA Chip in the Commodore 128
                <span className="grey-text">&nbsp;(klobie.com)</span>
              </td>
            </tr>
            <tr className="news-board__subtext">
              <td colSpan="1"></td>
              <td colSpan="11" className="news-board__subtext_desc">
                3 points by pseudolus 7 minutes ago
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default NewsBoard;