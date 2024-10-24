import React from "react";
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

export default function RTE({name, control, label, defaultValue = ""}) {
    return (
        

        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1"> {label} </label>}
        
            <Controller
                name={name || "content"}
                control={control}
                render={({field : {onChange}}) => (
                    <Editor 
                    intialValue = {defaultValue}
                    init ={
                        {
                            intialValue: defaultValue,
                            height: 500,
                            menubar: true,
                            plugins: [
                                "advlist", "autolink", "lists" ,"link", "image", "charmap" ,"print","preview", "anchor",
                                "searchreplace", "visualblocks", "code", "fullscreen",
                                "insertdatetime", "media", "table", "paste" ,"code" ,"help", "wordcount",
                            ],
                            toolbar:
                                "undo redo  blocks | image | bold italic forcolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjusitfy | bullist numlist outdent indent | removeformat | help ",
                            content_Style: "body {font-family:Helvetica, Arial, sans-serif; font-size: 14px}"
                        }  
                    } 
                        onEditorChange = {onChange} 
                    />
                )}
            />

        </div>

    )
}
