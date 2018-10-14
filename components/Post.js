import React, { Component } from 'react'
import Link from 'next/link'

export default () =>
    <main className="post">
        <h1 className="post__title">Обо мне</h1>
        <p className="post__text">
            Проектирую сайты, приложения. Руковожу работой дизайнеров и разработчиков. Работаю над собственными проектами. Пишу, обучаю программированию на JavaScript, слушаю музыку, путешествую и фотографирую.
        </p>
        <Link href="https://www.fl.ru/users/vadja-booom/">
            <a>Заказать разработку</a>
        </Link>
        <style jsx>{`
            .post {
                width: 800px;
                padding-left: 20px;
                font-family: Roboto;
            }
            .post__title {
                color: rgb(0, 96, 160);
                font-size: 48px;
                border-bottom: 1px solid rgba(0,100,168,0.2);
                line-height: 58px;
                font-weight: 900;
            }
            .post__text {
                font-size: 24px;
                line-height: 40px;
                padding-bottom: 10px;
            }
            a {
                background: rgba(79, 183, 111);
                border: 1px solid rgba(0,100,168,0.2);
                border-radius: 5px;
                padding: 10px 15px;
                transition: none;
                color: #fff;
            }
            a, a:visited {
                text-decoration: none;
            }
            a:hover {
                background: rgba(79, 183, 111, .8);
            }
        `}</style>
    </main>