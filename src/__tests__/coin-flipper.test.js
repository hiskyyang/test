import { test, describe, expect, vi, beforeEach, afterEach } from 'vitest';
import { flipCoin } from '../coin-flipper'; // Ensure the correct path to the calculator file

beforeEach(() => {
    vi.spyOn(Math, 'random');
});

afterEach(() => {
    Math.random.mockRestore(); // Restore the original implementation of Math.random after each test
});

describe("Colin flipper", () => {
    test("should be heads", () => {
        Math.random.mockReturnValue(0.4); // Mocking Math.random to return a value less than 0.5
        const result = flipCoin();
        expect(result).toBe("Heads");
    });

    test("should be tails", () => {
        Math.random.mockReturnValue(0.6); // Mocking Math.random to return a value greater than or equal to 0.5
        const result = flipCoin();
        expect(result).toBe("Tails");
    });
});


