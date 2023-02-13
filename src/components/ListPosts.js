import React from 'react'
import axios from 'axios'
import Loading from './Loading'
import './ListPosts.css';
import { useEffect, useState } from 'react';

function ListPosts() {

    const [postList, setPostList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(process.env.REACT_APP_ENDPOINT + process.env.REACT_APP_LIST_POSTS)
            .then((res) => {
                setPostList(res.data.posts)
                setLoading(false)
            }).catch(err => {
                console.log('err')
            })
    }, [])


    if (loading) {
        return (
            <Loading />
        )
    }

    return (
        <div className="app">

            <div className="cards">

                {postList.map((post, key) => {
                    return (
                        <div className="card" key={key}>
                            <div className="card-body" >
                                <h1>{post.title}</h1>
                                <div className="line"></div>
                                <h2>{post.content}</h2>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
    )

}

export default ListPosts