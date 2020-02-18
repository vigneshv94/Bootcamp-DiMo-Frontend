import { Injectable } from '@angular/core';

interface IStore {
  get<T>(key: string): T;
  save<T>(key: string, value: T): Promise<T>;
  remove(key: string): void;
}

export class BrowserStorage implements IStore {
  static checkStorageAvailability(storage: Storage): boolean {
    try {
      storage.setItem('test', 'test');
      storage.removeItem('test');
      return true;
    } catch (err) {
      return false;
    }
  }
  cache: Map<string, any>;
  storage: Storage;
  constructor(ls: Storage = localStorage) {
    this.cache = new Map();
    this.storage = ls;
    // TODO: check if storage is available
  }
  get<T>(key: string): T {
    if (this.cache.has(key)) return this.cache.get(key);
    const valStr = this.storage.getItem(key);
    const val = JSON.parse(String(valStr));
    this.cache.set(key, val);
    return val;
  }
  async save<T>(key: string, value: T): Promise<T> {
    const valStr: string | void = JSON.stringify(value);
    if (!valStr) throw new Error('Invalid Value');
    this.storage.setItem(key, valStr);
    this.cache.set(key, value);
    return value;
  }
  remove(key: string) {
    this.cache.delete(key);
    this.storage.removeItem(key);
  }
}
const browserStorage = new BrowserStorage();
export { browserStorage };
