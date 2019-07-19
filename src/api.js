import trae from 'trae'

//const url = window.location.href.includes('localhost')?'http://localhost:8080':'https://jwt-java.herokuapp.com'
//const url = window.location.href.includes('https://jwt-java.herokuapp.com/')

trae.baseUrl('https://jwt-java.herokuapp.com')
//trae.baseUrl(url)

trae.before((config) =>{
    const token ='Bearer '+window.localStorage.token
    if(token){
        config.headers['Authorization'] = token
    }

    return config
})

const api = {}

api.authenticate = function(username,password){
    return trae.post('/api/auth/signin',{username,password})
    .then(res => res.data)
    .catch(err => console.log('[ERROR]', err))
}

api.registroInicio = function(name,username,email,role,password){
    return trae.post('/api/auth/signup',{name,username,email,role,password})
    .then(res => res.data)
    .catch(err => console.log('[ERROR]',err))
}

api.verificarid = function(id){
    return trae.get('/verificar/'+id)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]'+id,err))
}

api.verificarcorreo = function(correo){
    return trae.get('/verificarcorreo/'+correo)
    .then(res => res.data)
    .catch(err => console.log('[ERROR]'+correo,err))
}


api.getStatus = function(){
    return trae.get('/')
    .then(res => res.data)
    .catch(err => console.log('[ERROR]',err))
}

api.mostrarTodosLosUsuarios = function(){
    return trae.get('/datosAllUsuarios')
    .then(res =>res.data)
    .catch(err => console.log('[ERROR]',err))
}

api.checkToken = function(){
    return trae.get('/check')
    .then(res =>res.data)
}

api.isAuthenticated = function(){
    return window.localStorage.token
  }

export default api