export type Post = {
    id: number;
    title: string;
    content: string;
}

const data: Post[] = [
    {
        id: 1,
        title: "Introduction to JavaScript",
        content: "JavaScript is a versatile programming language used for web development..."
    },
    {
        id: 2,
        title: "Understanding Variables in JavaScript",
        content: "Variables in JavaScript can store various types of data, like numbers, strings, and objects..."
    },
    {
        id: 3,
        title: "JavaScript Functions Explained",
        content: "A JavaScript function is a block of code designed to perform a particular task..."
    },
    {
        id: 4,
        title: "Asynchronous Programming with JavaScript",
        content: "Asynchronous programming allows JavaScript to handle long-running operations without blocking..."
    }
]

export const getPostList = (): Promise<Post[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 500)
    });
}

export const getPostById = (id: number): Promise<Post | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data.find(post => post.id === id) || null);
        }, 500)
    });
}

export const savePostById = (id: number, title: string, content: string): Promise<boolean> => {
    return new Promise((resolve) => {
        console.log("Saving post", id, title, content);
        const post = data.find(post => post.id === id);
        if (post) {
            post.title = title;
            post.content = content;
        }
        resolve(true);
    });
}