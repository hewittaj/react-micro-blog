import React from "react"
import { useState } from 'react'
import BlogList from './BlogList'

function Home() {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'New website', author: 'Alex', id: 1},
        {title: 'Welcome party!', body: 'Hello there', author: 'mario', id: 2},
        {title: 'Web dev tips', body: 'Welcome!', author: 'Alex', id: 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs)
    }

    return (
        <div className="home">
            <BlogList
                blogs={blogs}
                title="All Blogs!"
                handleDelete={handleDelete}
            />
            <BlogList
                blogs={blogs.filter(blog => blog.author === 'mario')}
                title="Mario's Blogs"
                handleDelete={handleDelete}
            />
        </div>
    )
}

export default Home