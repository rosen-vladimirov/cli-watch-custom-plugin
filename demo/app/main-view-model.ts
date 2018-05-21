import { Observable } from 'tns-core-modules/data/observable';
import { Plugin } from 'nativescript-plugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private plugin: Plugin;

  constructor() {
    super();

    this.plugin = new Plugin();
    this.message = this.plugin.message;
  }
}
