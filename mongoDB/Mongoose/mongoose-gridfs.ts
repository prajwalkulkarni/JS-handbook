//File handling with mongoose gridfs. backup code.

import {createModel} from 'mongoose-gridfs'


const Attachment = createModel()
//Upload file logic



const fileBuffer = (req as any).file

const options = ({ filename: fileBuffer.originalname, contentType: 'application/pdf' });

const resolveUploadBucket = new Promise((resolve, reject) => {
      Attachment.write(options, readStream, (error: any, file: any) => {
            if (error) {
                console.log(error)
                reject(error)
            }
            else {
                console.log(file)
                resolve(file)
                 }
              });
            })
       const file: any = await resolveUploadBucket
       var fileId = file.toObject({ getters: true })
      }
 
 //Read file logic, not working, refer for further improvements
      
      groupPosts = await Post.find({groupId})

        const Attachment:any = createModel()


        const files = function(fileId){
            // console.log(fileId)
            return new Promise((resolve,reject)=>{
                
                
                Attachment.findById({_id:fileId} , (error, attachment) => { 
                    if(error){
                        console.log(error)
                        reject(error)
                    }
                    else{
                        // console.log(buffer)
                        // resolve(buffer)
                        attachment.read((err, content) => { 
                            const readStream = Readable.from(content.toString())
                            // readStream.pipe()
                            resolve(readStream)
                            // console.log(content)
                            
                         });
                    }
                 });
    
            })
        }

        const correspondingFile = groupPosts.map(async(groupPost)=>{
            if(groupPost.cdn_link){
                return await files(groupPost.cdn_link)
            }
            else{
                return null
            }
        })

        // console.log(correspondingFile)

        const resFile = await Promise.all(correspondingFile)

        console.log(resFile)

        groupPosts = groupPosts.map(post=>post.toObject({getters:true}))

        groupPosts = groupPosts.map((groupPost,index)=>{
            return {
                id:groupPost['id'],
                creatorId:groupPost.creatorId,
                creatorName:groupPost.creatorName,
                groupId:groupPost.groupId,
                postTitle:groupPost.postTitle,
                description:groupPost.description,
                cdn_link:resFile[index],
                comments:groupPost.comments
            }
        })
