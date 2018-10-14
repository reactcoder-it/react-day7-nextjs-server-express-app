import React, { Component } from 'react'
import Link from 'next/link'

export default () =>
    <nav className="header">
        <div className="header__brand">PXSTUDIO</div>
        <ul className="header__menu">
            <li className="header__menu-item">
                <Link href="/jokes">
                    <a className="header__menu-link">Юмор</a>
                </Link>
            </li>
            <li className="header__menu-item">
                <Link href="/blog">
                    <a className="header__menu-link">Блог</a>
                </Link>
            </li>
        </ul>
        <style jsx>{`
            .header {
                display: flex;
                flex-direction: row;
                align-items: top;
                justify-content: space-between;
                padding: 0 20px;
            }
            .header__brand {
                font-family: Roboto, sans-serif;
                font-size: 35px;
                font-weight: 900;
                line-height: 54px;
                color: #5a5a5a;
            }
            .header__menu {
                list-style-type: none;
            }
            .header__menu-item {
                display: inline-block;
                padding-left: 20px;
            }
            .header__menu-link, .header__menu-link:visited {
                text-decoration: none;
                font-family: Roboto, sans-serif;
                font-size: 18px;
                color: rgb(0, 96, 160);
                border-bottom: 1px solid rgba(0, 100, 168, .2);
                transition-property: border-bottom, border-color, background, color, fill;
                transition-duration: .33s;
                transition-timing-function: ease-out;
            }
            .header__menu-link:hover {
                color: #a03000;
                transition: none;
            }
        `}</style>
        <style global jsx>{`
            body {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
        `}</style>
    </nav>