import * as React from 'react';
import { connect } from 'react-redux';

import './TitleArea.css';

import { showSchemaModal, downloadSvg } from '../../actions/';

import LogoIcon from '../icons/logo-small.svg';

import { Button } from 'react-toolbox/lib/button';
import { StateInterface } from '../../reducers';

interface TitleAreaProps {
  _showChangeButton: boolean;
  _showDownloadButton: boolean;
  currentSvgIndex: number | null;
  dispatch: any;
}

function mapStateToProps(state: StateInterface) {
  return {
    currentSvgIndex: state.currentSvgIndex,
  };
}

class TitleArea extends React.Component<TitleAreaProps> {
  render() {
    const { dispatch, _showChangeButton, _showDownloadButton, currentSvgIndex } = this.props;
    return (
      <div className="title-area">
        <a href="https://github.com/APIs-guru/graphql-voyager" target="_blank">
          <div className="logo">
            <LogoIcon />
            <h2 className="title">
              <strong>GraphQL</strong> Voyager
            </h2>
          </div>
        </a>
        {_showChangeButton && (
          <Button
            className="choosebutton"
            raised
            primary
            label="Change Schema"
            onClick={() => dispatch(showSchemaModal())}
          />
        )}
        {_showDownloadButton && (
          <Button
            className="downloadbutton"
            raised
            primary
            label="Download SVG"
            disabled={currentSvgIndex === null}
            onClick={() => dispatch(downloadSvg())}
          />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TitleArea);
