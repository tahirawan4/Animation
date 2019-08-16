import React, { Component } from "react";
import axios from 'axios';
import { Stage, Layer, Rect, RegularPolygon as Triangle, Line, Text } from "react-konva";
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Button, Modal } from 'react-bootstrap';
import update from 'immutability-helper';
import Select from 'react-select';
import './network.config.css';

import { GND, ATTENArrow, ATTENBoxShape, BaseFork, TopFork, FrontPanelFork, GroundFork, LowerTestFork, SplitterForks, UpperTestFork } from "./network.custom";
import { AppSwitch } from "@coreui/react";

// Do not DELETE any comments...!!!

const GREEN = '#00b32d';
const options = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
  { value: 6, label: '6' },
  { value: 7, label: '7' },
  { value: 8, label: '8' },
  { value: 9, label: '9' },
  { value: 10, label: '10' },
  { value: 11, label: '11' },
  { value: 12, label: '12' },
  { value: 13, label: '13' },
  { value: 14, label: '14' },
  { value: 15, label: '15' },
  { value: 16, label: '16' },
  { value: 17, label: '17' },
  { value: 18, label: '18' },
  { value: 19, label: '19' },
  { value: 20, label: '20' },
  { value: 21, label: '21' },
  { value: 22, label: '22' },
  { value: 23, label: '23' },
  { value: 24, label: '24' },
  { value: 25, label: '25' },
  { value: 26, label: '26' },
  { value: 27, label: '27' },
  { value: 28, label: '28' },
  { value: 29, label: '29' },
  { value: 30, label: '30' },
  { value: 31, label: '31' }
];

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
        topPath: false,
        basePath: false,
        topToBasePath: false,
        selectedOption: 12,
        rectangles: [
          { name: 'AntennaTopAmplifier', x: 95, y: 30, width: 800, height: 175, fill: '#F0F0F0', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'BaseAmplifier', x: 75, y: 330, width: 860, height: 180, fill: '#F0F0F0', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch1', x: 190, y: 100, width: 60, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch2', x: 500, y: 100, width: 60, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch3', x: 310, y: 400, width: 60, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch4', x: 620, y: 400, width: 60, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch5', x: 780, y: 100, width: 60, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Switch6', x: 740, y: 400, width: 50, height: 80, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'Splitter', x: 100, y: 375, width: 70, height: 80, fill: 'white', stroke: 'blue', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          { name: 'ATTEN', x: 210, y: 395, width: 50, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5 },
          // { name: 'ATTEN', x: 210, y: 395, width: 50, height: 40, fill: 'white', stroke: 'black', strokeWidth: 1, shadowColor: 'gray', shadowBlur: 5, shadowOpacity: 0.5, onClick: this.handleClick },
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
          { name: 'LiveWire1', show: true, points: [90, 115, 200, 115], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_1_1', show: true, points: [240, 107, 270, 107, 270, 85, 325, 85], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_1_2', show: true, points: [362, 85, 480, 85, 480, 107, 510, 107], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_2_1', show: true, points: [240, 115, 280, 115, 280, 145, 375, 145], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_2_2', show: true, points: [412, 145, 470, 145, 470, 115, 510, 115], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire2_3', show: true, points: [240, 124, 270, 124, 270, 190, 480, 190, 480, 124, 510, 124], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire3', show: true, points: [550, 115, 620, 115], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire4', show: true, points: [680, 115, 790, 115], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire5', show: true, points: [830, 110, 900, 110], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire6', show: true, points: [780, 420, 940, 420], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire7', show: true, points: [670, 410, 750, 410], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_1_1', show: true, points: [360, 405, 390, 405, 390, 395, 445, 395], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_1_2', show: true, points: [483, 395, 580, 395, 580, 405, 630, 405], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_2_1', show: true, points: [360, 415, 400, 415, 400, 455, 445, 455], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_2_2', show: true, points: [483, 455, 570, 455, 570, 415, 630, 415], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire8_3', show: true, points: [630, 425, 580, 425, 580, 490, 390, 490, 390, 425, 360, 425], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire9', show: true, points: [260, 415, 320, 415], stroke: GREEN, strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'LiveWire10', show: true, points: [170, 415, 210, 415], stroke: GREEN   , strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'BlackWireSwitch6_1', show: true, points: [750, 420, 725, 420, 725, 460, 750, 460], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'BlackWireSwitch6_2', show: true, points: [750, 470, 725, 470, 725, 490, 940, 490], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'FrontPanelWire', show: true, points: [780, 460, 940, 460], stroke: 'black', strokeWidth: 2, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },

          { name: 'BlackDottedWireSwitch6', show: true, points: [765, 425, 765, 455], stroke: 'black', strokeWidth: 1.5, lineJoin: 'round', dash: [5, 4], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'GreenDottedWire', show: true, points: [50, 115, 50, 250, 980, 250, 980, 420], stroke: GREEN, strokeWidth: 1.5, lineJoin: 'round', dash: [20, 10], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'BlackDottedWire', show: true, points: [720, 145, 720, 220, 1010, 220, 1010, 490, 980, 490], stroke: 'black', strokeWidth: 1.5, lineJoin: 'round', dash: [20, 10], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'RedDottedWire', show: true, points: [920, 110, 1010, 110, 1010, 60], stroke: 'red', strokeWidth: 1.5, lineJoin: 'round', dash: [5, 5], shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },

          { name: 'NFS1_1', show: true, points: [200, 115, 240, 107], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS1_2', show: false, points: [200, 115, 240, 115], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS1_3', show: false, points: [200, 115, 240, 124], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS2_1', show: true, points: [510, 107, 550, 115], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS2_2', show: false, points: [510, 115, 550, 115], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS2_3', show: false, points: [510, 124, 550, 115], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS3_1', show: false, points: [320, 415, 360, 405], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS3_2', show: true, points: [320, 415, 360, 415], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS3_3', show: false, points: [320, 415, 360, 425], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS4_1', show: false, points: [630, 405, 670, 410], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS4_2', show: true, points: [630, 415, 670, 410], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS4_3', show: false, points: [630, 425, 670, 410], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS5_1', show: true, points: [790, 115, 830, 110], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS5_2', show: false, points: [790, 115, 830, 120], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS6_1', show: true, points: [750, 410, 780, 420], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS6_2', show: false, points: [750, 420, 780, 420], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS6_3', show: false, points: [750, 460, 780, 460], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },
          { name: 'NFS6_4', show: true, points: [750, 470, 780, 460], stroke: 'black', strokeWidth: 1, lineJoin: 'round', shadowColor: 'black', shadowBlur: 5, shadowOffset: [2, 2], shadowOpacity: 0.5 },

          { name: 'WaveBoxLine1', show: true, points: [627, 111, 642, 106, 657, 111, 672, 106], stroke: 'blue', strokeWidth: 1, lineJoin: 'round', lineCap: 'round', tension: 0.5 },
          { name: 'WaveBoxLine2', show: true, points: [627, 121, 642, 116, 657, 121, 672, 116], stroke: 'blue', strokeWidth: 1, lineJoin: 'round', lineCap: 'round', tension: 0.5 },
          { name: 'WaveBoxLine3', show: true, points: [627, 131, 642, 126, 657, 131, 672, 126], stroke: 'blue', strokeWidth: 1, lineJoin: 'round', lineCap: 'round', tension: 0.5 },
        ],
        texts: [
          { name: 'AntennaTopAmplifierText', x: 105, y: 40, text: 'Antenna Top Amplifier', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'BaseAmplifierText', x: 85, y: 340, text: 'Base Amplifier', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'ToTopText', x: 880, y: 400, text: 'To Top', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'ToBaseText', x: 100, y: 145, text: 'To Base', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'UpperLNA1Text', x: 334, y: 80, text: 'LNA1', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'UpperLNA2Text', x: 384, y: 140, text: 'LNA2', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'LowerLNA1Text', x: 454, y: 390, text: 'LNA1', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'LowerLNA2Text', x: 454, y: 450, text: 'LNA2', fontSize: 12, fontFamily: 'Calibri', fill: 'black' },
          { name: 'WaveBoxText', x: 590, y: 80, text: '453.25-458.25 MHz', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'GNDText', x: 841, y: 169, text: 'GND', fontSize: 10, fontFamily: 'Calibri', fill: 'black' },
          { name: 'UpperTestText', x: 740, y: 150, text: 'Test', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'LowerTestText', x: 980, y: 495, text: 'Test', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'ATTENText', x: 200, y: 375, text: 'ATTEN 12 dB', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
          { name: 'SplitterText', x: 110, y: 405, text: 'Splitter', fontSize: 17, fontFamily: 'Calibri', fill: 'blue' },
          { name: 'FrontPanelText', x: 845, y: 440, text: 'Front Panel', fontSize: 17, fontFamily: 'Calibri', fill: 'black' },
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
    // if (num >= 1 && num <= 30) {
      console.log(this.state.atten);
      this.setState({ atten: 'ATTEN ' + num + ' dB' });
      this.setState({
        texts: update(this.state.texts, {12: {text: {$set: this.state.atten}}})
      });
      // this.setState({ [this.state.texts[1]['text']]: this.state.atten });
      this.setState({ show: false });
    // }
    // this.setState({ show: false });
  };
  // handleChange = (e) => {
  //   const num = parseInt(e.target.value);
  //   console.log(num);
  //   if (num >= 1 && num <= 30) {
  //     this.setState({ atten: 'ATTEN ' + e.target.value + ' dB' });
  //   }
  // };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    this.setState({
      texts: update(this.state.texts, {12: {text: {$set: 'ATTEN ' + selectedOption.value + ' dB'}}})
    });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setTopToBasePath('pathTest');
      this.setBasePath('basePath3');
      this.setTopPath('topPath3');
      this.setColors('green', 'green', 'red', 'green');
        // let nfsTopPath = Math.random() >= 0.5;
        // let nfsBasePath = Math.random() >= 0.5;
        // let nfs5 = Math.random() >= 0.5;
        // let nfs61 = Math.random() >= 0.5;
        // let nfs62 = Math.random() >= 0.5;
        // if (nfsTopPath === true) {
        //   this.setState({ lines: update(this.state.lines, {25: {show: {$set: true     }}}) });
        //   this.setState({ lines: update(this.state.lines, {26: {show: {$set: false    }}}) });
        //   this.setState({ lines: update(this.state.lines, {27: {show: {$set: false    }}}) });
        //   this.setState({ lines: update(this.state.lines, {28: {show: {$set: true     }}}) });
        //   this.setState({ lines: update(this.state.lines, {29: {show: {$set: false    }}}) });
        //   this.setState({ lines: update(this.state.lines, {30: {show: {$set: false    }}}) });
        //   this.setState({ lines: update(this.state.lines, {1: {stroke: {$set: GREEN   }}}) });
        //   this.setState({ lines: update(this.state.lines, {2: {stroke: {$set: GREEN   }}}) });
        //   this.setState({ lines: update(this.state.lines, {3: {stroke: {$set: 'black' }}}) });
        //   this.setState({ lines: update(this.state.lines, {4: {stroke: {$set: 'black' }}}) });
        //   this.setState({ lines: update(this.state.lines, {5: {stroke: {$set: 'black' }}}) });
        // }
        // if (nfsTopPath === false) {
        //   this.setState({ lines: update(this.state.lines, {25: {show: {$set: false    }}}) });
        //   this.setState({ lines: update(this.state.lines, {26: {show: {$set: true     }}}) });
        //   this.setState({ lines: update(this.state.lines, {27: {show: {$set: false    }}}) });
        //   this.setState({ lines: update(this.state.lines, {28: {show: {$set: false    }}}) });
        //   this.setState({ lines: update(this.state.lines, {29: {show: {$set: true     }}}) });
        //   this.setState({ lines: update(this.state.lines, {30: {show: {$set: false    }}}) });
        //   this.setState({ lines: update(this.state.lines, {1: {stroke: {$set: 'black' }}}) });
        //   this.setState({ lines: update(this.state.lines, {2: {stroke: {$set: 'black' }}}) });
        //   this.setState({ lines: update(this.state.lines, {3: {stroke: {$set: GREEN   }}}) });
        //   this.setState({ lines: update(this.state.lines, {4: {stroke: {$set: GREEN   }}}) });
        //   this.setState({ lines: update(this.state.lines, {5: {stroke: {$set: 'black' }}}) });
        // }
        // if (nfsBasePath === true) {
        //   this.setState({ lines: update(this.state.lines, {31: {show: {$set: true      }}}) });
        //   this.setState({ lines: update(this.state.lines, {32: {show: {$set: false     }}}) });
        //   this.setState({ lines: update(this.state.lines, {33: {show: {$set: false     }}}) });
        //   this.setState({ lines: update(this.state.lines, {34: {show: {$set: true      }}}) });
        //   this.setState({ lines: update(this.state.lines, {35: {show: {$set: false     }}}) });
        //   this.setState({ lines: update(this.state.lines, {36: {show: {$set: false     }}}) });
        //   this.setState({ lines: update(this.state.lines, {11: {stroke: {$set: GREEN   }}}) });
        //   this.setState({ lines: update(this.state.lines, {12: {stroke: {$set: GREEN   }}}) });
        //   this.setState({ lines: update(this.state.lines, {13: {stroke: {$set: 'black' }}}) });
        //   this.setState({ lines: update(this.state.lines, {14: {stroke: {$set: 'black' }}}) });
        //   this.setState({ lines: update(this.state.lines, {15: {stroke: {$set: 'black' }}}) });
        // }
        // if (nfsBasePath === false) {
        //   this.setState({ lines: update(this.state.lines, {31: {show: {$set: false     }}}) });
        //   this.setState({ lines: update(this.state.lines, {32: {show: {$set: true      }}}) });
        //   this.setState({ lines: update(this.state.lines, {33: {show: {$set: false     }}}) });
        //   this.setState({ lines: update(this.state.lines, {34: {show: {$set: false     }}}) });
        //   this.setState({ lines: update(this.state.lines, {35: {show: {$set: true      }}}) });
        //   this.setState({ lines: update(this.state.lines, {36: {show: {$set: false     }}}) });
        //   this.setState({ lines: update(this.state.lines, {11: {stroke: {$set: 'black' }}}) });
        //   this.setState({ lines: update(this.state.lines, {12: {stroke: {$set: 'black' }}}) });
        //   this.setState({ lines: update(this.state.lines, {13: {stroke: {$set: GREEN   }}}) });
        //   this.setState({ lines: update(this.state.lines, {14: {stroke: {$set: GREEN   }}}) });
        //   this.setState({ lines: update(this.state.lines, {15: {stroke: {$set: 'black' }}}) });
        // }
        // this.setState({ lines: update(this.state.lines, {37: {show: {$set: nfs5  }}}) });
        // this.setState({ lines: update(this.state.lines, {38: {show: {$set: !nfs5 }}}) });
        // this.setState({ lines: update(this.state.lines, {39: {show: {$set: nfs61 }}}) });
        // this.setState({ lines: update(this.state.lines, {40: {show: {$set: !nfs61}}}) });
        // this.setState({ lines: update(this.state.lines, {41: {show: {$set: nfs62 }}}) });
        // this.setState({ lines: update(this.state.lines, {42: {show: {$set: !nfs62}}}) });
    }, 1000);
    this.interval = setInterval(() => {
      this.setTopToBasePath('pathNormal');
      this.setBasePath('basePath4');
      this.setTopPath('topPath5');
      this.setColors('green', 'red', 'green', 'green');
        // this.setState({ lines: update(this.state.lines, {25: {show: {$set: false    }}}) });
        // this.setState({ lines: update(this.state.lines, {26: {show: {$set: false    }}}) });
        // this.setState({ lines: update(this.state.lines, {27: {show: {$set: true     }}}) });
        // this.setState({ lines: update(this.state.lines, {28: {show: {$set: false    }}}) });
        // this.setState({ lines: update(this.state.lines, {29: {show: {$set: false    }}}) });
        // this.setState({ lines: update(this.state.lines, {30: {show: {$set: true     }}}) });
        // this.setState({ lines: update(this.state.lines, {1: {stroke: {$set: 'black' }}}) });
        // this.setState({ lines: update(this.state.lines, {2: {stroke: {$set: 'black' }}}) });
        // this.setState({ lines: update(this.state.lines, {3: {stroke: {$set: 'black' }}}) });
        // this.setState({ lines: update(this.state.lines, {4: {stroke: {$set: 'black' }}}) });
        // this.setState({ lines: update(this.state.lines, {5: {stroke: {$set: GREEN   }}}) });
        // this.setState({ lines: update(this.state.lines, {31: {show: {$set: false    }}}) });
        // this.setState({ lines: update(this.state.lines, {32: {show: {$set: false    }}}) });
        // this.setState({ lines: update(this.state.lines, {33: {show: {$set: true     }}}) });
        // this.setState({ lines: update(this.state.lines, {34: {show: {$set: false    }}}) });
        // this.setState({ lines: update(this.state.lines, {35: {show: {$set: false    }}}) });
        // this.setState({ lines: update(this.state.lines, {36: {show: {$set: true     }}}) });
        // this.setState({ lines: update(this.state.lines, {11: {stroke: {$set: 'black' }}}) });
        // this.setState({ lines: update(this.state.lines, {12: {stroke: {$set: 'black' }}}) });
        // this.setState({ lines: update(this.state.lines, {13: {stroke: {$set: 'black' }}}) });
        // this.setState({ lines: update(this.state.lines, {14: {stroke: {$set: 'black' }}}) });
        // this.setState({ lines: update(this.state.lines, {15: {stroke: {$set: GREEN   }}}) });
    }, 2000);
    this.getNetworkConfig();
  }

  setTopPath(pathName) {
    if (pathName === 'topPath1') {
      this.setState({ lines: update(this.state.lines, {25: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {26: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {27: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {28: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {29: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {30: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {37: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {38: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {1: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {2: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {3: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {4: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {5: {stroke: {$set: 'black' }}}) });
    } else if (pathName === 'topPath2') {
      this.setState({ lines: update(this.state.lines, {25: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {26: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {27: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {28: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {29: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {30: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {37: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {38: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {1: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {2: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {3: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {4: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {5: {stroke: {$set: 'black' }}}) });
    } else if (pathName === 'topPath3') {
      this.setState({ lines: update(this.state.lines, {25: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {26: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {27: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {28: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {29: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {30: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {37: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {38: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {1: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {2: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {3: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {4: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {5: {stroke: {$set: GREEN   }}}) });
    } else if (pathName === 'topPath4') {
      this.setState({ lines: update(this.state.lines, {25: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {26: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {27: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {28: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {29: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {30: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {37: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {38: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {1: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {2: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {3: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {4: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {5: {stroke: {$set: 'black' }}}) });
    } else if (pathName === 'topPath5') {
      this.setState({ lines: update(this.state.lines, {25: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {26: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {27: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {28: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {29: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {30: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {37: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {38: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {1: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {2: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {3: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {4: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {5: {stroke: {$set: 'black' }}}) });
    } else if (pathName === 'topPath6') {
      this.setState({ lines: update(this.state.lines, {25: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {26: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {27: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {28: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {29: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {30: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {37: {show: {$set: false    }}}) });
      this.setState({ lines: update(this.state.lines, {38: {show: {$set: true     }}}) });
      this.setState({ lines: update(this.state.lines, {1: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {2: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {3: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {4: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {5: {stroke: {$set: GREEN   }}}) });
    }
  }
  setBasePath(pathName) {
    if (pathName === 'basePath1') {
      this.setState({ lines: update(this.state.lines, {31: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {32: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {33: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {34: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {35: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {36: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {39: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {40: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {41: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {42: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {9: {stroke: {$set: GREEN    }}}) });
      this.setState({ lines: update(this.state.lines, {11: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {12: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {13: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {14: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {15: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {18: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {19: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {20: {stroke: {$set: 'black' }}}) });
    } else if (pathName === 'basePath2') {
      this.setState({ lines: update(this.state.lines, {31: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {32: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {33: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {34: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {35: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {36: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {39: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {40: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {41: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {42: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {9: {stroke: {$set: GREEN    }}}) });
      this.setState({ lines: update(this.state.lines, {11: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {12: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {13: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {14: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {15: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {18: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {19: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {20: {stroke: {$set: 'black' }}}) });
    } else if (pathName === 'basePath3') {
      this.setState({ lines: update(this.state.lines, {31: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {32: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {33: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {34: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {35: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {36: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {39: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {40: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {41: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {42: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {9: {stroke: {$set: GREEN    }}}) });
      this.setState({ lines: update(this.state.lines, {11: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {12: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {13: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {14: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {15: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {18: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {19: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {20: {stroke: {$set: 'black' }}}) });
    } else if (pathName === 'basePath4') {
      this.setState({ lines: update(this.state.lines, {31: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {32: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {33: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {34: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {35: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {36: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {39: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {40: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {41: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {42: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {11: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {12: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {13: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {14: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {15: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {18: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {19: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {20: {stroke: {$set: GREEN   }}}) });
    } else if (pathName === 'basePath5') {
      this.setState({ lines: update(this.state.lines, {31: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {32: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {33: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {34: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {35: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {36: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {39: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {40: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {41: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {42: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {9: {stroke: {$set: GREEN    }}}) });
      this.setState({ lines: update(this.state.lines, {11: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {12: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {13: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {14: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {15: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {18: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {19: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {20: {stroke: {$set: GREEN   }}}) });
    } else if (pathName === 'basePath6') {
      this.setState({ lines: update(this.state.lines, {31: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {32: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {33: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {34: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {35: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {36: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {39: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {40: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {41: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {42: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {9: {stroke: {$set: GREEN    }}}) });
      this.setState({ lines: update(this.state.lines, {11: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {12: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {13: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {14: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {15: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {18: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {19: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {20: {stroke: {$set: GREEN   }}}) });
    } else if (pathName === 'basePath7') {
      this.setState({ lines: update(this.state.lines, {31: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {32: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {33: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {34: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {35: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {36: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {39: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {40: {show: {$set: false     }}}) });
      this.setState({ lines: update(this.state.lines, {41: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {42: {show: {$set: true      }}}) });
      this.setState({ lines: update(this.state.lines, {9: {stroke: {$set: GREEN    }}}) });
      this.setState({ lines: update(this.state.lines, {11: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {12: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {13: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {14: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {15: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {18: {stroke: {$set: 'black' }}}) });
      this.setState({ lines: update(this.state.lines, {19: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {20: {stroke: {$set: GREEN   }}}) });
    }
  }
  setTopToBasePath(pathName) {
    if (pathName === 'pathNormal') {
      this.setState({ lines: update(this.state.lines, {22: {stroke: {$set: GREEN   }}}) });
      this.setState({ lines: update(this.state.lines, {23: {stroke: {$set: 'black' }}}) });
    } else if (pathName === 'pathTest') {
      this.setState({ lines: update(this.state.lines, {22: {stroke: {$set: 'black'  }}}) });
      this.setState({ lines: update(this.state.lines, {23: {stroke: {$set: GREEN    }}}) });
    }
  }
  setColors(topLnaOne='green', topLnaTwo='green', baseLnaOne='green', baseLnaTwo='green') {
    this.setState({ rectangles: update(this.state.rectangles, {10: {fill: {$set: topLnaOne  }}}) });
    this.setState({ rectangles: update(this.state.rectangles, {11: {fill: {$set: topLnaTwo  }}}) });
    this.setState({ rectangles: update(this.state.rectangles, {12: {fill: {$set: baseLnaOne }}}) });
    this.setState({ rectangles: update(this.state.rectangles, {13: {fill: {$set: baseLnaTwo }}}) });
  }
  getNetworkConfig() {
    axios.get('')
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    let optionsToReturn = [];
    const { selectedOption } = this.state;
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
      if (line.show) {
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
      } else return null;
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
    const optionList = () => {
      for (let i = 1; i <= 31; i++) {
        optionsToReturn.push(<option key={i} value={i} onClick={this.handleSave}>{i}</option>);
      }
      return optionsToReturn;
    };
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

                {/*{ this.state.NFS1_1 ? <Line name={'NFS1_1'} points={[200, 115, 240, 107]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS1_2 ? <Line name={'NFS1_2'} points={[200, 115, 240, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS1_3 ? <Line name={'NFS1_3'} points={[200, 115, 240, 124]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS2_1 ? <Line name={'NFS2_1'} points={[510, 107, 550, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS2_2 ? <Line name={'NFS2_2'} points={[510, 115, 550, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS2_3 ? <Line name={'NFS2_3'} points={[510, 124, 550, 115]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS5_1 ? <Line name={'NFS5_1'} points={[790, 115, 830, 110]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS5_2 ? <Line name={'NFS5_2'} points={[790, 115, 830, 120]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS3_1 ? <Line name={'NFS3_1'} points={[320, 415, 360, 405]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS3_2 ? <Line name={'NFS3_2'} points={[320, 415, 360, 415]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS3_3 ? <Line name={'NFS3_3'} points={[320, 415, 360, 425]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS4_1 ? <Line name={'NFS4_1'} points={[630, 405, 670, 410]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS4_2 ? <Line name={'NFS4_2'} points={[630, 415, 670, 410]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS4_3 ? <Line name={'NFS4_3'} points={[630, 425, 670, 410]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS6_1 ? <Line name={'NFS6_1'} points={[750, 410, 780, 420]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS6_2 ? <Line name={'NFS6_2'} points={[750, 420, 780, 420]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS6_3 ? <Line name={'NFS6_3'} points={[750, 460, 780, 460]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}
                {/*{ this.state.NFS6_4 ? <Line name={'NFS6_4'} points={[750, 470, 780, 460]} stroke={'black'} strokeWidth={1} lineJoin={'round'} shadowColor={'black'} shadowBlur={5} shadowOffset={[2, 2]} shadowOpacity={0.5} /> : null }*/}

                {/*<Text name={'atten'} x={200} y={375} text={this.state.atten} fontSize={17} fontFamily={'Calibri'} fill={'black'} />*/}

              </Layer>
            </Stage>
          </Col>
        </Row>
        <Row>
          <Col xs="4" sm="6" md="2" lg="1">
            <FormGroup>
                <Label htmlFor="attenuater">Set Attenuater</Label>
            </FormGroup>
          </Col>
            <Col xs="4" sm="6" md="2" lg="2">
                <FormGroup>
                  <Select value={selectedOption} onChange={this.handleChange} options={options} />
                    {/*<Input type="select" name="Attenuater" id="attenuater" defaultValue={12} onChange={this.handleSave}>*/}
                        {/*{ optionList() }*/}
                    {/*</Input>*/}
                </FormGroup>
            </Col>
            <Col xs="4" md="8" lg="9">
              {/*<Select value={selectedOption} onChange={this.handleChange} options={options} />*/}
            </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" md="6" lg="6">
            <p>
              Model: <span>TM305-2TD16G1B</span><br/>
              Serial No: <span>KCC123456-1-1</span><br/>
              Site: <span>Cambridge on</span><br/>
              Location: <span>43.38700, -80.31833</span><br/>
            </p>
          </Col>
          <Col xs="12" sm="6" md="6" lg="6" className="normal">
            {/*<Form className="radioBtn">*/}
              {/*<FormGroup check>*/}
                <AppSwitch className={'mx-1'} variant={'3d'} outline={'alt'} color={'success'} defaultChecked label />
                <span>Normal</span><br/>
                {/*<Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="normal" />*/}
                {/*<Label className="form-check-label" check htmlFor="inline-radio1">Normal</Label>*/}
              {/*</FormGroup>*/}
              {/*<FormGroup check>*/}
                <AppSwitch className={'mx-1'} variant={'3d'} outline={'alt'} color={'success'} defaultChecked label />
                <span>Test</span><br/>
                {/*<Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="test" />*/}
                {/*<Label className="form-check-label" check htmlFor="inline-radio2">Test</Label>*/}
              {/*</FormGroup>*/}
              {/*<FormGroup check>*/}
                <AppSwitch className={'mx-1'} variant={'3d'} outline={'alt'} color={'success'} defaultChecked label />
                <span><span>Through</span></span><br/>
                {/*<Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="through" />*/}
                {/*<Label className="form-check-label" check htmlFor="inline-radio3">Through</Label>*/}
              {/*</FormGroup>*/}
            {/*</Form>*/}
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
