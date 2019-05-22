import React, { Component } from "react";
import { Stage, Layer, Rect, RegularPolygon as Triangle, Line, Text } from "react-konva";
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Button, Modal } from 'react-bootstrap';
import './network.config.css';

import { GND, ATTENArrow, ATTENBoxShape, BaseFork, TopFork, FrontPanelFork, GroundFork, LowerTestFork, SplitterForks, UpperTestFork } from "./network.custom";


class NetworkConfig extends Component {
  constructor(props, context) {
    super(props, context);
      this.state = {
        show: false,
        NFS1_1: true,
        NFS1_2: false,
        NFS1_3: false,
        NFS2_1: true,
        NFS2_2: false,
        NFS2_3: false,
        NFS5_1: true,
        NFS5_2: false,
        NFS3_1: false,
        NFS3_2: true,
        NFS3_3: false,
        NFS4_1: false,
        NFS4_2: true,
        NFS4_3: false,
        NFS6_1: true,
        NFS6_2: false,
        NFS6_3: false,
        NFS6_4: true,
        atten: 'ATTEN 12 dB',
        rectangles: [
          { name: 'Switch1', x: 300, y: 100, width: 50, height: 30, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch2', x: 600, y: 100, width: 50, height: 30, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch3', x: 400, y: 400, width: 50, height: 30, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch4', x: 700, y: 400, width: 50, height: 30, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch5', x: 880, y: 100, width: 50, height: 30, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch6', x: 820, y: 400, width: 50, height: 80, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Splitter', x: 200, y: 375, width: 60, height: 80, fill: 'white', stroke: 'blue', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'ATTEN', x: 300, y: 395, width: 50, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5, onClick: this.handleClick },
          { name: 'UpperLNA1', x: 410, y: 60, width: 80, height: 50, fill: 'green', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'UpperLNA2', x: 460, y: 120, width: 80, height: 50, fill: 'green', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'LowerLNA1', x: 510, y: 370, width: 80, height: 50, fill: 'red', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'LowerLNA2', x: 510, y: 430, width: 80, height: 50, fill: 'green', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'WaveBox', x: 720, y: 100, width: 50, height: 30, fill: 'white', stroke: 'blue', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
        ],
        triangles: [
          { name: 'UpperLNA1Tri', x: 450, y: 85, sides: 3, radius: 20, fill: 'white', stroke: 'black', strokeWidth: 0.5, rotation: 270 },
          { name: 'UpperLNA2Tri', x: 500, y: 145, sides: 3, radius: 20, fill: 'white', stroke: 'black', strokeWidth: 0.5, rotation: 270 },
          { name: 'LowerLNA1Tri', x: 550, y: 395, sides: 3, radius: 20, fill: 'white', stroke: 'black', strokeWidth: 0.5, rotation: 270 },
          { name: 'LowerLNA2Tri', x: 550, y: 455, sides: 3, radius: 20, fill: 'white', stroke: 'black', strokeWidth: 0.5, rotation: 270 },
          { name: 'GroundTri', x: 1060, y: 60, sides: 3, radius: 10, fill: 'white', stroke: 'red', strokeWidth: 0.5, rotation: 180, dash: [5, 5] },
        ],
        lines: [
          { name: 'LiveWire1', points: [190, 115, 310, 115], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_1_1', points: [340, 107, 370, 107, 370, 85, 430, 85], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_1_2', points: [460, 85, 580, 85, 580, 107, 610, 107], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_2_1', points: [340, 115, 380, 115, 380, 145, 480, 145], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_2_2', points: [510, 145, 570, 145, 570, 115, 610, 115], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_3', points: [340, 124, 370, 124, 370, 190, 580, 190, 580, 124, 610, 124], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire3', points: [640, 115, 720, 115], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire4', points: [770, 115, 890, 115], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire5', points: [920, 110, 990, 110], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire6', points: [860, 420, 1010, 420], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire7', points: [740, 410, 830, 410], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_1_1', points: [440, 405, 470, 405, 470, 395, 530, 395], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_1_2', points: [560, 395, 660, 395, 660, 405, 710, 405], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_2_1', points: [440, 415, 480, 415, 480, 455, 530, 455], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_2_2', points: [560, 455, 650, 455, 650, 415, 710, 415], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_3', points: [710, 425, 660, 425, 660, 490, 470, 490, 470, 425, 440, 425], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire9', points: [350, 415, 410, 415], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire10', points: [260, 415, 300, 415], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'BlackWireSwitch6_1', points: [830, 420, 805, 420, 805, 460, 830, 460], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'BlackWireSwitch6_2', points: [830, 470, 805, 470, 805, 490, 1010, 490], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'FrontPanelWire', points: [860, 460, 1010, 460], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },

          { name: 'BlackDottedWireSwitch6', points: [845, 425, 845, 455], stroke: 'black', strokeWidth: 1.5, lineJoin: 'round', dash: [5, 4], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'GreenDottedWire', points: [150, 115, 150, 250, 1050, 250, 1050, 420], stroke: 'green', strokeWidth: 1.5, lineJoin: 'round', dash: [20, 10], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'BlackDottedWire', points: [820, 145, 820, 220, 1070, 220, 1070, 490, 1050, 490], stroke: 'black', strokeWidth: 1.5, lineJoin: 'round', dash: [20, 10], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'RedDottedWire', points: [1010, 110, 1060, 110, 1060, 60], stroke: 'red', strokeWidth: 1.5, lineJoin: 'round', dash: [5, 5], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'RedDottedWire', points: [1010, 110, 1060, 110, 1060, 60], stroke: 'red', strokeWidth: 1.5, lineJoin: 'round', dash: [5, 5], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },

          // { name: 'NFS1_1', points: [310, 115, 340, 107], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS1_2', points: [310, 115, 340, 115], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS1_3', points: [310, 115, 340, 124], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS2_1', points: [610, 107, 640, 115], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS2_2', points: [610, 115, 640, 115], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS2_3', points: [610, 124, 640, 115], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS5_1', points: [890, 115, 920, 110], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS5_2', points: [890, 115, 920, 120], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS3_1', points: [410, 415, 440, 405], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS3_2', points: [410, 415, 440, 415], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS3_3', points: [410, 415, 440, 425], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS4_1', points: [710, 405, 740, 415], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS4_2', points: [710, 415, 740, 415], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS4_3', points: [710, 425, 740, 415], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS6_1', points: [830, 410, 860, 420], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS6_2', points: [830, 420, 860, 420], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS6_3', points: [830, 460, 860, 460], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          // { name: 'NFS6_4', points: [830, 470, 860, 460], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },

          { name: 'WaveBoxLine1', points: [730, 110, 740, 105, 750, 110, 760, 105], stroke: 'blue', strokeWidth: 1, lineJoin: 'round', lineCap: 'round', tension: 0.5 },
          { name: 'WaveBoxLine2', points: [730, 118, 740, 113, 750, 118, 760, 113], stroke: 'blue', strokeWidth: 1, lineJoin: 'round', lineCap: 'round', tension: 0.5 },
          { name: 'WaveBoxLine3', points: [730, 126, 740, 121, 750, 126, 760, 121], stroke: 'blue', strokeWidth: 1, lineJoin: 'round', lineCap: 'round', tension: 0.5 },
        ],
        texts: [
          { name: 'ToTopText', x: 970, y: 400, text: 'To Top', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'ToBaseText', x: 190, y: 145, text: 'To Base', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'UpperLNA1Text', x: 436, y: 81, text: 'LNA1', fontSize: 9, fontFamily: 'Calibri', fill: 'black' },
          { name: 'UpperLNA2Text', x: 486, y: 141, text: 'LNA2', fontSize: 9, fontFamily: 'Calibri', fill: 'black' },
          { name: 'LowerLNA1Text', x: 536, y: 391, text: 'LNA1', fontSize: 9, fontFamily: 'Calibri', fill: 'black' },
          { name: 'LowerLNA2Text', x: 536, y: 451, text: 'LNA2', fontSize: 9, fontFamily: 'Calibri', fill: 'black' },
          { name: 'WaveBoxText', x: 690, y: 80, text: '453.25-458.25 MHz', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'GNDText', x: 941, y: 169, text: 'GND', fontSize: 8, fontFamily: 'Calibri', fill: 'black' },
          { name: 'UpperTestText', x: 850, y: 150, text: 'Test', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'LowerTestText', x: 1050, y: 500, text: 'Test', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          // { name: 'ATTENText', x: 290, y: 375, text: 'ATTEN 12 dB', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'SplitterText', x: 210, y: 410, text: 'Splitter', fontSize: 10, fontFamily: 'Calibri', fill: 'blue' },
          { name: 'FrontPanelText', x: 950, y: 445, text: 'Front Panel', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
        ]
      };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleClick = (e) => {
    this.setState({ show: true });
  };
  handleClose = (e) => {
    this.setState({ show: false });
  };
  handleSave = (e) => {
    const num = parseInt(e.target.value);
    if (num >= 1 && num <= 30) {
      console.log(this.state.atten);
      this.setState({ atten: ['ATTEN', this.state.atten, 'dB'] });
      this.setState({ show: false });
    }
    this.setState({ show: false });
  };
  handleChange = (e) => {
    const num = parseInt(e.target.value);
    if (num >= 1 && num <= 30) {
      this.setState({ atten: 'ATTEN ' + e.target.value + ' dB' });
    }
  };
  componentDidMount() {
    this.interval = setInterval(() => {
        let nfs1 = Math.random() >= 0.5;
        let nfs2 = Math.random() >= 0.5;
        let nfs3 = Math.random() >= 0.5;
        let nfs4 = Math.random() >= 0.5;
        let nfs5 = Math.random() >= 0.5;
        let nfs61 = Math.random() >= 0.5;
        let nfs62 = Math.random() >= 0.5;
        this.setState({ NFS1_1: nfs1 });
        this.setState({ NFS1_2: !nfs1 });
        this.setState({ NFS1_3: false });
        this.setState({ NFS2_1: nfs2 });
        this.setState({ NFS2_2: !nfs2 });
        this.setState({ NFS2_3: false });
        this.setState({ NFS3_1: nfs3 });
        this.setState({ NFS3_2: !nfs3 });
        this.setState({ NFS3_3: false });
        this.setState({ NFS4_1: nfs4 });
        this.setState({ NFS4_2: !nfs4 });
        this.setState({ NFS4_3: false });
        this.setState({ NFS5_1: nfs5 });
        this.setState({ NFS5_2: !nfs5 });
        this.setState({ NFS6_1: nfs61 });
        this.setState({ NFS6_2: !nfs61 });
        this.setState({ NFS6_3: nfs62 });
        this.setState({ NFS6_4: !nfs62 });
    }, 1000);
    this.interval = setInterval(() => {
        this.setState({ NFS1_1: false });
        this.setState({ NFS1_2: false });
        this.setState({ NFS1_3: true });
        this.setState({ NFS2_1: false });
        this.setState({ NFS2_2: false });
        this.setState({ NFS2_3: true });
        this.setState({ NFS3_1: false });
        this.setState({ NFS3_2: false });
        this.setState({ NFS3_3: true });
        this.setState({ NFS4_1: false });
        this.setState({ NFS4_2: false });
        this.setState({ NFS4_3: true });
    }, 2000);
  }
  render() {
    const rectList = this.state.rectangles.map((rect, index) => {
      return (
        <Rect
          key={index}
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
          fill={rect.fill}
          stroke={rect.stroke}
          strokeWidth={rect.strokeWidth}
          shadowColor={rect.shadowColor}
          shadowBlur={rect.shadowBlur}
          shadowOpacity={rect.shadowOpacity}
          onClick={rect.onClick}
        />
      )
    });
    const triList = this.state.triangles.map((tri, index) => {
      return (
        <Triangle
          key={index}
          x={tri.x}
          y={tri.y}
          sides={tri.sides}
          radius={tri.radius}
          fill={tri.fill}
          stroke={tri.stroke}
          strokeWidth={tri.strokeWidth}
          rotation={tri.rotation}
          dash={tri.dash}
        />
      )
    });
    const lineList = this.state.lines.map((line, index) => {
      return (
        <Line
          key={index}
          points={line.points}
          stroke={line.stroke}
          strokeWidth={line.strokeWidth}
          dash={line.dash}
          lineJoin={line.lineJoin}
          lineCap={line.lineCap}
          shadowColor={line.shadowColor}
          shadowBlur={line.shadowBlur}
          shadowOffset={line.shadowOffset}
          shadowOpacity={line.shadowOpacity}
          tension={line.tension}
        />
      )
    });
    const textList = this.state.texts.map((text) => {
      return (
        <Text
          className="fontFamily"
          key={text.name}
          x={text.x}
          y={text.y}
          text={text.text}
          fontSize={text.fontSize}
          fontFamily={text.fontFamily}
          fill={text.fill}
        />
      )
    });
    return (
      <div className="container">
        <Row>
          <Col lg="12">
            <Stage width={window.innerWidth} height={window.innerHeight}>
              <Layer>
                { rectList }
                { triList }
                { lineList }
                { textList }
                <ATTENBoxShape/>
                <ATTENArrow/>
                <BaseFork/>
                <TopFork/>
                <FrontPanelFork/>
                <LowerTestFork/>
                <UpperTestFork/>
                <SplitterForks/>
                <GroundFork/>
                <GND/>
                { this.state.NFS1_1 ? <Line name={'NFS1_1'} points={[310, 115, 340, 107]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS1_2 ? <Line name={'NFS1_2'} points={[310, 115, 340, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS1_3 ? <Line name={'NFS1_3'} points={[310, 115, 340, 124]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS2_1 ? <Line name={'NFS2_1'} points={[610, 107, 640, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS2_2 ? <Line name={'NFS2_2'} points={[610, 115, 640, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS2_3 ? <Line name={'NFS2_3'} points={[610, 124, 640, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS5_1 ? <Line name={'NFS5_1'} points={[890, 115, 920, 110]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS5_2 ? <Line name={'NFS5_2'} points={[890, 115, 920, 120]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS3_1 ? <Line name={'NFS3_1'} points={[410, 415, 440, 405]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS3_2 ? <Line name={'NFS3_2'} points={[410, 415, 440, 415]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS3_3 ? <Line name={'NFS3_3'} points={[410, 415, 440, 425]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS4_1 ? <Line name={'NFS4_1'} points={[710, 405, 740, 410]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS4_2 ? <Line name={'NFS4_2'} points={[710, 415, 740, 410]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS4_3 ? <Line name={'NFS4_3'} points={[710, 425, 740, 410]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS6_1 ? <Line name={'NFS6_1'} points={[830, 410, 860, 420]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS6_2 ? <Line name={'NFS6_2'} points={[830, 420, 860, 420]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS6_3 ? <Line name={'NFS6_3'} points={[830, 460, 860, 460]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS6_4 ? <Line name={'NFS6_4'} points={[830, 470, 860, 460]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                <Text name={'atten'} x={290} y={375} text={this.state.atten} fontSize={12} fontFamily={'Calibri'} fill={'black'} />
              </Layer>
            </Stage>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <p>
              Model: <span>TM305-2TD16G1B</span><br/>
              Serial No: <span>KCC123456-1-1</span><br/>
              Site: <span>Cambridge on</span><br/>
              Location: <span>43.38700, -80.31833</span><br/>
            </p>
          </Col>
          <Col lg="6">
            <Form className="radioBtn">
              <FormGroup check>
                <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="normal" />
                <Label className="form-check-label" check htmlFor="inline-radio1">Normal</Label>
              </FormGroup>
              <FormGroup check>
                <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="test" />
                <Label className="form-check-label" check htmlFor="inline-radio2">Test</Label>
              </FormGroup>
              <FormGroup check>
                <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="through" />
                <Label className="form-check-label" check htmlFor="inline-radio3">Through</Label>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enter ATTEN Value</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form inline>
              <FormGroup className="form-group" row>
                <Label className="col-sm-6 form-check-label" htmlFor="atten">Atten Number</Label>
                <Input className="col-sm-6 form-control" type="number" id="atten" name="atten"
                  placeholder="enter atten number" min="1" max="30" onChange={this.handleChange} required/>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
              </Button>
              <Button variant="primary" onClick={this.handleSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default NetworkConfig;
