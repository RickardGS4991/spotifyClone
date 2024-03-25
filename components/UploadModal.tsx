"use client";

import uniqid from "uniqid";
import useUploadModal from "@/hooks/useUploadModal";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from "react";
import { useUser } from "@/hooks/useUser";

import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";
import toast from "react-hot-toast";

const UploadModal = () => {
    const [isloading, setIsLoading] = useState(false);
    const uploadModal = useUploadModal();

    const {
        register,
        handleSubmit,
        reset,
      } = useForm<FieldValues>({
        defaultValues: {
          author: '',
          title: '',
          song: null,
          image: null,
        }
      });


    const onChange = (open: boolean) => {
        if(!open){
            reset();
            uploadModal.onClose();
        }
    }
    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        
      }

    return(
        <Modal
        title="Add a song"
        description=""
        isOpen={uploadModal.isOpen}
        onChange={onChange}>
            <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="flex flex-col gap-y-4"
      >
        <Input
          id="title"
          disabled={isloading}
          {...register('title', { required: true })}
          placeholder="Song title"
        />
        <Input
          id="author"
          disabled={isloading}
          {...register('author', { required: true })}
          placeholder="Song author"
        />
        <div>
          <div className="pb-1">
            Select a song file
          </div>
          <Input
            placeholder="test" 
            disabled={isloading}
            type="file"
            accept=".mp3"
            id="song"
            {...register('song', { required: true })}
          />
        </div>
        <div>
          <div className="pb-1">
            Select an image
          </div>
          <Input
            placeholder="test" 
            disabled={isloading}
            type="file"
            accept="image/*"
            id="image"
            {...register('image', { required: true })}
          />
        </div>
        <Button disabled={isloading} type="submit">
          Create
        </Button>
      </form>
        </Modal>
    )
}

export default UploadModal;