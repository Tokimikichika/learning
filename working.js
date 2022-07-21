Class UserService {
    var username; - не нужны
    var password; - не нужны
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    get username() {
    return UserService.username – нет контекста, по этому он вернет UserService
    если создаем метод, который возвращает имя, то надо написать так:
        return this.username 
    }
    get password() {
        throw “You are not allowed to get password”; - по всей видимости тут должна быть логика(проверка) 
        If….else (когда пользователя кидает к паролю, то должна быть выведена ошибка, а тут строка) 
        или же метод который возвращает с использованием контекста пароль, к примеру: 
        return this.password;
    }
    static authenticate_user(fn()(чтобы переменная result у нас работала после ответа асинхронного вызова, 
        передаем функцию колбек со значением result)) {
    чтобы вызвать этот метод из другой переменной/константы этот метод не должен быть статическим
        let(тут скорее всего должен быть const) xhr = new XMLHttpRequest();
    xhr.open(‘GET’, ‘https://examples.com/spi/user/authenticate?username=’  + 
               UserService.username(вместо этого должно быть this.username) + 
               ‘&password=’ + UserService.password(вместо этого должно быть this.password), 
               true(делает это синхронным, что тут не логично));
                     xhr.responseType(сервер сам мне его вернет с том виде, в котором он есть) = 
                          ‘json(фактически мы можем перезаписать его, но если только нам очень надо)’;
        const(тут должен быть let, иначе будет ошибка) result = false;
    тут вызывает функцию колбек fn() {
    return let result = false;
    }
        xhr.onload = function() {
            if(xhr.status !== ‘200’(тут строка, а должен быть число)) {
          result = xhr.response(если responseType = ‘json’, то вернется объект со значением ‘true’);
            } else {
          result = true;
                    }
            }; 
              xhr.send();(забыли добавить)
    
            return result;
            (тут необходимо добавить в случае неуспешного выполнения ответа нужно написать xhr.error = function(), 
            а также xhr.about в случае частичного обработанного запроса)
    }
    $(‘form #login’).click(function () {
    Document.querySelector(‘form #login’).addEvenLisener.onclick( function () =>
              var username = $(‘#username’);(если мы уже придерживаемся синтаксиса ECMAScript 6, 
                то лучше написать let вместо var)
              let username = document.getElementById('username');
              var password = $(‘#password’);
              let password = document.getElementById('password');
              var res = (нет New) UserService (username, password).authenticate_user();
              if(res == true(скорее всего просто значение res)) {
                    document.location.href =  ‘/home’; 
              } else {
    alert(res.error);(как правило alert редко вызывают и у переменной res, 
        который является буллевым значением, нет метода error)
               }           
    })

