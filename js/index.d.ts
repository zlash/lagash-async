/*********************************************************************************

MIT License

Copyright (c) 2016 - Pablo Zaidenvoren

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*********************************************************************************/
export default class Async {
    static promise<TResult>(func: F0<TResult>, thisObj: any): F0Async<TResult>;
    static promise<T1, TResult>(func: F1<T1, TResult>, thisObj: any): F1Async<T1, TResult>;
    static promise<T1, T2, TResult>(func: F2<T1, T2, TResult>, thisObj: any): F2Async<T1, T2, TResult>;
    static promise<T1, T2, T3, TResult>(func: F3<T1, T2, T3, TResult>, thisObj: any): F3Async<T1, T2, T3, TResult>;
    static promise<T1, T2, T3, T4, TResult>(func: F4<T1, T2, T3, T4, TResult>, thisObj: any): F4Async<T1, T2, T3, T4, TResult>;
    static promiseSpread(func: F0Spread, thisObj: any): F0AsyncSpread;
    static promiseSpread<T1>(func: F1Spread<T1>, thisObj: any): F1AsyncSpread<T1>;
    static promiseSpread<T1, T2>(func: F2Spread<T1, T2>, thisObj: any): F2AsyncSpread<T1, T2>;
    static promiseSpread<T1, T2, T3>(func: F3Spread<T1, T2, T3>, thisObj: any): F3AsyncSpread<T1, T2, T3>;
    static promiseSpread<T1, T2, T3, T4>(func: F4Spread<T1, T2, T3, T4>, thisObj: any): F4AsyncSpread<T1, T2, T3, T4>;
    private static promiseInternal(func, thisObj);
    private static promiseInternalSpread(func, thisObj);
}
export interface Callback<T> {
    (error: any, result: T): void;
}
export interface F0Async<TResult> {
    (): Promise<TResult>;
}
export interface F1Async<T1, TResult> {
    (p1: T1): Promise<TResult>;
}
export interface F2Async<T1, T2, TResult> {
    (p1: T1, p2: T2): Promise<TResult>;
}
export interface F3Async<T1, T2, T3, TResult> {
    (p1: T1, p2: T2, p3: T3): Promise<TResult>;
}
export interface F4Async<T1, T2, T3, T4, TResult> {
    (p1: T1, p2: T2, p3: T3, p4: T4): Promise<TResult>;
}
export interface F5Async<T1, T2, T3, T4, T5, TResult> {
    (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): Promise<TResult>;
}
export interface F0<TResult> {
    <P0, P1, P2, P3, P4, P5>(callback: Callback<TResult>): void;
}
export interface F1<T1, TResult> {
    <P0, P1, P2, P3, P4, P5>(p1: T1, callback: Callback<TResult>): void;
}
export interface F2<T1, T2, TResult> {
    <P0, P1, P2, P3, P4, P5>(p1: T1, p2: T2, callback: Callback<TResult>): void;
}
export interface F3<T1, T2, T3, TResult> {
    <P0, P1, P2, P3, P4, P5>(p1: T1, p2: T2, p3: T3, callback: Callback<TResult>): void;
}
export interface F4<T1, T2, T3, T4, TResult> {
    <P0, P1, P2, P3, P4, P5>(p1: T1, p2: T2, p3: T3, p4: T4, callback: Callback<TResult>): void;
}
export interface F5<T1, T2, T3, T4, T5, TResult> {
    <P0, P1, P2, P3, P4, P5>(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, callback: Callback<TResult>): void;
}
export interface CallbackSpread {
    (error: any, ...results: any[]): void;
}
export interface F0AsyncSpread {
    (): Promise<any[]>;
}
export interface F1AsyncSpread<T1> {
    (p1: T1): Promise<any[]>;
}
export interface F2AsyncSpread<T1, T2> {
    (p1: T1, p2: T2): Promise<any[]>;
}
export interface F3AsyncSpread<T1, T2, T3> {
    (p1: T1, p2: T2, p3: T3): Promise<any[]>;
}
export interface F4AsyncSpread<T1, T2, T3, T4> {
    (p1: T1, p2: T2, p3: T3, p4: T4): Promise<any[]>;
}
export interface F5AsyncSpread<T1, T2, T3, T4, T5> {
    (p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): Promise<any[]>;
}
export interface F0Spread<> {
    <P0, P1, P2, P3, P4, P5>(callback: CallbackSpread): void;
}
export interface F1Spread<T1> {
    <P0, P1, P2, P3, P4, P5>(p1: T1, callback: CallbackSpread): void;
}
export interface F2Spread<T1, T2> {
    <P0, P1, P2, P3, P4, P5>(p1: T1, p2: T2, callback: CallbackSpread): void;
}
export interface F3Spread<T1, T2, T3> {
    <P0, P1, P2, P3, P4, P5>(p1: T1, p2: T2, p3: T3, callback: CallbackSpread): void;
}
export interface F4Spread<T1, T2, T3, T4> {
    <P0, P1, P2, P3, P4, P5>(p1: T1, p2: T2, p3: T3, p4: T4, callback: CallbackSpread): void;
}
export interface F5Spread<T1, T2, T3, T4, T5> {
    <P0, P1, P2, P3, P4, P5>(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, callback: CallbackSpread): void;
}
