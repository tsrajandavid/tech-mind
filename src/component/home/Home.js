import React, { Component } from 'react'
import Banner from './Banner'
import BlogItems from './BlogItems'
import person from "./../../assets/img/01.png"
import img from "./../../assets/img/charity/002.jpg"
import img1 from "./../../assets/img/inner/068489.png"
export default class Home extends Component {
    render() {
        return (
            <>
                <Banner />
                <section className="section__stories blog_slider padding-t-12">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="swip__stories">
                                    <div className="swiper-container blog-slider">
                                        <div className="title_sections_inner">
                                            <h2>Featured Stories</h2>
                                        </div>
                                        <div className="swiper-wrapper">

                                            <div className="swiper-slide">
                                                <div className="grid_blog_avatar">
                                                    <div className="cover_blog">
                                                        <img src={img} alt="" />
                                                    </div>
                                                    <div className="body_blog">
                                                        <a href="#">
                                                            <div className="person media">
                                                                <img src={person} alt="" />
                                                                <div className="media-body">
                                                                    <div className="txt">
                                                                        <h3>Olivia DeSmit</h3>
                                                                        <time>27 Sep, 2020</time>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                        <a href="single-blog.html" className="link_blog">
                                                            <h4 className="title_blog">
                                                                As climate warms, Ecuador fights fires with forecasts
                                                            </h4>
                                                            <p className="short_desc">
                                                                Vitae semper quis lectus nulla at volutpat diam. Sed viverra ipsum
                                                                nunc aliquet .
                                                            </p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <div className="container margin-my-7">
                    <div className="dividar_line"></div>
                </div>

                <BlogItems />
            </>
        )
    }
}
