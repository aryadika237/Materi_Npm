try {
    const url = new URL('http ://example.com');
} catch (error) {
    error; // => TypeError, "Failed to cosntruct URL: Invalid URL"
}
console.log('url');