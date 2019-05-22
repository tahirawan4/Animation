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
          { name: 'Switch1', x: 190, y: 100, width: 60, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch2', x: 500, y: 100, width: 60, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch3', x: 310, y: 400, width: 60, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch4', x: 620, y: 400, width: 60, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch5', x: 780, y: 100, width: 60, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch6', x: 740, y: 400, width: 50, height: 80, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Splitter', x: 100, y: 375, width: 70, height: 80, fill: 'white', stroke: 'blue', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'ATTEN', x: 210, y: 395, width: 50, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5, onClick: this.handleClick },
          { name: 'UpperLNA1', x: 310, y: 60, width: 80, height: 50, fill: 'green', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'UpperLNA2', x: 360, y: 120, width: 80, height: 50, fill: 'green', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'LowerLNA1', x: 430, y: 370, width: 80, height: 50, fill: 'red', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'LowerLNA2', x: 430, y: 430, width: 80, height: 50, fill: 'green', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'WaveBox', x: 620, y: 100, width: 60, height: 40, fill: 'white', stroke: 'blue', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
        ],
        triangles: [
          { name: 'UpperLNA1Tri', x: 350, y: 85, sides: 3, radius: 25, fill: 'white', stroke: 'black', strokeWidth: 0.5, rotation: 270 },
          { name: 'UpperLNA2Tri', x: 400, y: 145, sides: 3, radius: 25, fill: 'white', stroke: 'black', strokeWidth: 0.5, rotation: 270 },
          { name: 'LowerLNA1Tri', x: 470, y: 395, sides: 3, radius: 25, fill: 'white', stroke: 'black', strokeWidth: 0.5, rotation: 270 },
          { name: 'LowerLNA2Tri', x: 470, y: 455, sides: 3, radius: 25, fill: 'white', stroke: 'black', strokeWidth: 0.5, rotation: 270 },
          { name: 'GroundTri', x: 1010, y: 60, sides: 3, radius: 12, fill: 'white', stroke: 'red', strokeWidth: 0.5, rotation: 180, dash: [5, 5] },
        ],
        lines: [
          { name: 'LiveWire1', points: [90, 115, 200, 115], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_1_1', points: [240, 107, 270, 107, 270, 85, 325, 85], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_1_2', points: [362, 85, 480, 85, 480, 107, 510, 107], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_2_1', points: [240, 115, 280, 115, 280, 145, 375, 145], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_2_2', points: [412, 145, 470, 145, 470, 115, 510, 115], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_3', points: [240, 124, 270, 124, 270, 190, 480, 190, 480, 124, 510, 124], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire3', points: [550, 115, 620, 115], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire4', points: [680, 115, 790, 115], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire5', points: [830, 110, 900, 110], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire6', points: [780, 420, 940, 420], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire7', points: [670, 410, 750, 410], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_1_1', points: [360, 405, 390, 405, 390, 395, 445, 395], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_1_2', points: [483, 395, 580, 395, 580, 405, 630, 405], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_2_1', points: [360, 415, 400, 415, 400, 455, 445, 455], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_2_2', points: [483, 455, 570, 455, 570, 415, 630, 415], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_3', points: [630, 425, 580, 425, 580, 490, 390, 490, 390, 425, 360, 425], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire9', points: [260, 415, 320, 415], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire10', points: [170, 415, 210, 415], stroke: 'green', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'BlackWireSwitch6_1', points: [750, 420, 725, 420, 725, 460, 750, 460], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'BlackWireSwitch6_2', points: [750, 470, 725, 470, 725, 490, 940, 490], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'FrontPanelWire', points: [780, 460, 940, 460], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },

          { name: 'BlackDottedWireSwitch6', points: [765, 425, 765, 455], stroke: 'black', strokeWidth: 1.5, lineJoin: 'round', dash: [5, 4], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'GreenDottedWire', points: [50, 115, 50, 250, 980, 250, 980, 420], stroke: 'green', strokeWidth: 1.5, lineJoin: 'round', dash: [20, 10], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'BlackDottedWire', points: [720, 145, 720, 220, 1010, 220, 1010, 490, 980, 490], stroke: 'black', strokeWidth: 1.5, lineJoin: 'round', dash: [20, 10], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'RedDottedWire', points: [920, 110, 1010, 110, 1010, 60], stroke: 'red', strokeWidth: 1.5, lineJoin: 'round', dash: [5, 5], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },

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

          { name: 'WaveBoxLine1', points: [627, 111, 642, 106, 657, 111, 672, 106], stroke: 'blue', strokeWidth: 1, lineJoin: 'round', lineCap: 'round', tension: 0.5 },
          { name: 'WaveBoxLine2', points: [627, 121, 642, 116, 657, 121, 672, 116], stroke: 'blue', strokeWidth: 1, lineJoin: 'round', lineCap: 'round', tension: 0.5 },
          { name: 'WaveBoxLine3', points: [627, 131, 642, 126, 657, 131, 672, 126], stroke: 'blue', strokeWidth: 1, lineJoin: 'round', lineCap: 'round', tension: 0.5 },
        ],
        texts: [
          { name: 'ToTopText', x: 890, y: 400, text: 'To Top', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'ToBaseText', x: 90, y: 145, text: 'To Base', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'UpperLNA1Text', x: 334, y: 80, text: 'LNA1', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'UpperLNA2Text', x: 384, y: 140, text: 'LNA2', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'LowerLNA1Text', x: 454, y: 390, text: 'LNA1', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'LowerLNA2Text', x: 454, y: 450, text: 'LNA2', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'WaveBoxText', x: 590, y: 80, text: '453.25-458.25 MHz', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'GNDText', x: 841, y: 169, text: 'GND', fontSize: 10, fontFamily: 'Calibri', fill: 'black' },
          { name: 'UpperTestText', x: 740, y: 150, text: 'Test', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'LowerTestText', x: 980, y: 495, text: 'Test', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          // { name: 'ATTENText', x: 290, y: 375, text: 'ATTEN 12 dB', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'SplitterText', x: 110, y: 405, text: 'Splitter', fontSize: 17, fontFamily: 'Calibri', fill: 'blue' },
          { name: 'FrontPanelText', x: 855, y: 440, text: 'Front Panel', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
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
                { this.state.NFS1_1 ? <Line name={'NFS1_1'} points={[200, 115, 240, 107]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS1_2 ? <Line name={'NFS1_2'} points={[200, 115, 240, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS1_3 ? <Line name={'NFS1_3'} points={[200, 115, 240, 124]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS2_1 ? <Line name={'NFS2_1'} points={[510, 107, 550, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS2_2 ? <Line name={'NFS2_2'} points={[510, 115, 550, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS2_3 ? <Line name={'NFS2_3'} points={[510, 124, 550, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS5_1 ? <Line name={'NFS5_1'} points={[790, 115, 830, 110]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS5_2 ? <Line name={'NFS5_2'} points={[790, 115, 830, 120]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS3_1 ? <Line name={'NFS3_1'} points={[320, 415, 360, 405]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS3_2 ? <Line name={'NFS3_2'} points={[320, 415, 360, 415]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS3_3 ? <Line name={'NFS3_3'} points={[320, 415, 360, 425]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS4_1 ? <Line name={'NFS4_1'} points={[630, 405, 670, 410]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS4_2 ? <Line name={'NFS4_2'} points={[630, 415, 670, 410]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS4_3 ? <Line name={'NFS4_3'} points={[630, 425, 670, 410]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS6_1 ? <Line name={'NFS6_1'} points={[750, 410, 780, 420]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS6_2 ? <Line name={'NFS6_2'} points={[750, 420, 780, 420]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS6_3 ? <Line name={'NFS6_3'} points={[750, 460, 780, 460]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                { this.state.NFS6_4 ? <Line name={'NFS6_4'} points={[750, 470, 780, 460]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }
                <Text name={'atten'} x={200} y={375} text={this.state.atten} fontSize={17} fontFamily={'Calibri'} fill={'black'} />
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
