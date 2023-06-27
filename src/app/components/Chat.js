"use client"

import { useChat } from "ai/react"

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat();


    return (
        <div className="flex flex-col max-w-xl px-8 mx-auto">

            {
                messages.map(message => {
                    const isAbuela = message.role != "user"

                    return (
                        <div key={message.id}>
                            <p>
                                {isAbuela ? "Abuela: " : "Usuario: "}
                                <span className={isAbuela ? "text-yellow-500" : "text-blue-300"}>
                                {message.content}
                                </span>
                                </p>
                        </div>
                    )
                })
            }

            <form className="fixed w-full bottom-4" onSubmit={handleSubmit}>
                <input className="fixed w-full max-w-xl px-4 py-2 m-auto mb-8 rounded-full bottom-4 " placeholder="Abuelita, dime cosas bonitas" type="text" name="content" value={input} onChange={handleInputChange} />
            </form>
        </div>
    )
}