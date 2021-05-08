import React from 'react'
import Reset from './Reset'
import Result from './Result'
import SetColor from './SetColor'
import SetSize from './SetSize'

export default class Box extends React.Component {
    render() {
        return (
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 w-1/2">
                                <SetColor />
                            </div>
                            <div className="p-4 w-1/2">
                                <SetSize />
                            </div>
                        </div>
                        <Reset />
                        <Result />
                    </div>
                </section>

            </div>
        )
    }
}

