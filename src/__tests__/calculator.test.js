import {test, it, describe, expect, vi} from 'vitest';
import { sum, product } from '../calculator'; // Ensure the correct path to the calculator file

describe("Adding", () => {
    test("should add two numbers", () => {
        const result = sum(2, 3); // Ensure the function is called correctly
        expect(result).toBe(5);
    });

    test("should add multiple numbers", () => {
        const result = sum(1, 2, 3, 4);
        expect(result).toBe(10);
    });
});

describe("Multiplying", () => {
    test("should multiply two numbers", () => {
        const result = product(2, 3);
        expect(result).toBe(6);
    });

    test("should multiply multiple numbers", () => {
        const result = product(1, 2, 3, 4);
        expect(result).toBe(24);
    });

    test("should return 1 for no arguments", () => {
        const result = product();
        expect(result).toBe(1);
    });
});
