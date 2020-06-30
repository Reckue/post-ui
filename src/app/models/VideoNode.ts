import {NodeContent} from './NodeContent';

export class VideoNode implements NodeContent {

  videoUrl: string;

  constructor(videoUrl: string = null) {
    this.videoUrl = videoUrl;
  }
}
