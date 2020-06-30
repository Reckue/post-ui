import {NodeContent} from './NodeContent';

export class AudioNode implements NodeContent {

  audioUrl: string;

  constructor(audioUrl: string = null) {
    this.audioUrl = audioUrl;
  }
}
