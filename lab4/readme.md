# Express
1. Create project Folder
2. goto project and open terminal
3. execute 'npm init -y'
4. install 'npm i nodemon -D'
5. install 'npm i express'
6. open package.json
    a. change 'type:'module''
    b. update script {
        "start":"node peg1.js"
        "dev":"nodemon prg1.js"
    }
7. create prg1.js in folder
8. add folderName/node_module in .gitignore



The `send()` function is used to send content back to the client. The content can be HTML, JSON, an HTML file, or plain text.
We can also set the HTTP status code using the `status()` function. It can be chained with the `send()` function.


## Map
this function is used to iterate any array it must return new array
'''
array.map((item)=>{
    return
})
array.map((item)=>())
'''
in 1 syntax we have to used explixit return keyword where as in syntax 2 is not reqired
exclude no of property from any json object
## search 
to search any item in json array we used find method it will retun null on unsccefull or object on on succesfull