import { describe, test, expect, afterEach } from "vitest";
import { fetchArticle } from "../article-loader"; // Ensure the correct path to the article-loader file
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

const axiosMock = new MockAdapter(axios); 

afterEach(() => {
    axiosMock.restore(); // Restore the original implementation of axios after each test
});

describe("Article Loader", () => { 
    test("should fetch article by ID", async () => {
        //Mock API response
        axiosMock
        .onGet("https://jsonplaceholder.typicode.com/posts/1")
        .reply(200, {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        });

        const article = await fetchArticle(1);
        expect(article).toEqual({
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        })
    })
});