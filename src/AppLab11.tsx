import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostsList from "./pages/lab11/PostsList";
import PostDetails from "./pages/lab11/PostDetails";
import EditPost from "./pages/lab11/EditPost";
import ErrorPage from "./pages/lab11/Error";
import MainPage from "./pages/lab11/MainPage";

export default function AppLab11() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    <Route path="/posts" element={<PostsList />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/posts/:id/edit" element={<EditPost />} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}