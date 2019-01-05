import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }
  get(key: string): string {
    return this.storage.getItem(key) || null;
  }
  set(key: string, value: string): void {
    this.storage[key] = value;
  }
  setObject(key: string, value: any): void {
    if (!value) {
      return;
    }
    this.storage[key] = JSON.stringify(value);
  }
  getObject(key: string): any {
    return JSON.parse(this.storage[key] || {});
  }
  getValue<T>(key: string): T {
    const obj = JSON.parse(this.storage[key] || null);
    return <T>obj || null;
  }
  remove(key: string): void {
    this.storage.removeItem(key);
  }
  clear() {
    this.storage.clear();
  }
}
