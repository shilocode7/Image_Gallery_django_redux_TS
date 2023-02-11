import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../../app/hooks';
import { getStudentsAsync } from './gallerySlice'

const Up = () => {
    const dispatch = useAppDispatch();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadedFile, setUploadedFile] = useState<any | null>(null);
    const [sName, setsName] = useState("");
    const [city, setcity] = useState("");
    const [age, setage] = useState("")
    const [theId, settheId] = useState(0)
    const [uploadNew, setuploadNew] = useState(false)
    useEffect(() => {
        dispatch(getStudentsAsync())
    }, [uploadNew])

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(event.target!.files![0]);
    };


    const handleUpload = async () => {
        console.log("first")
        if (!selectedFile) {
            return;
        }

        let form_data = new FormData();
        form_data.append("image", selectedFile);
        form_data.append("sName", sName);
        form_data.append("city", city);
        form_data.append("age", age);
        console.log(form_data)
        try {
            const response = await axios.post('http://127.0.0.1:8000/students', form_data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setUploadedFile(response.data.file);
            setuploadNew(!uploadNew);
        } catch (error) {
            console.error(error);
        }
    };
    const handleUpdate = async () => {
        console.log("first")
        if (!selectedFile) {
            return;
        }

        const form_data = new FormData();
        form_data.append("image", selectedFile);
        form_data.append("sName", sName);
        form_data.append("city", city);
        form_data.append("age", age);
        console.log(form_data)
        try {
            const response = await axios.put('http://127.0.0.1:8000/students' + '/' + theId, form_data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setUploadedFile(response.data.file);
            setuploadNew(!uploadNew);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            Name:<input onChange={(e) => setsName(e.target.value)} />
            City:<input onChange={(e) => setcity(e.target.value)} />
            age:<input onChange={(e) => setage(e.target.value)} />
            {uploadedFile && <p>Uploaded file: {uploadedFile}</p>}
            id:<input onChange={(e) => settheId(+e.target.value)} />
            <button onClick={handleUpdate}>update</button>
        </div>

    )
}

export default Up

