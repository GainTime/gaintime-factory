# GainTime
Painel administrativo. Simples e rápido.

[Arquivos compilados do GainTime](https://github.com/GainTime/gainTime)

### Instalação

* Via git:
    - Crie uma vendor:
    ```
    $ mkdir vendors; cd vendors
    ```
    - Faça o download:
    ```
    $ git submodule add https://github.com/GainTime/build-GainTime
    ```
    - Escolha a versão com a qual deseja trabalhar: `git checkout vx.y.z` (opcional)
    ```
    $ git checkout v0.2
    ```        
    ```
    $ git checkout v0.2.1
    ```
    - Informe ao git pra usar aquela versão no submodulo, commitando sua "pasta"
    - Pronto :smile:

### Estrutura
```
.
├── build
│   ├── js
│   │   └── gainTime.js
│   └── scss
│       ├── base
│       │   ├── _base.scss
│       │   ├── _mixins.scss
│       │   └── _variables.scss
│       ├── layouts
│       │   ├── _footer.scss
│       │   ├── _header.scss
│       │   └── _sections.scss
│       ├── modules
│       │   ├── _buttons.scss
│       │   ├── _colors.scss
│       │   ├── _components.scss
│       │   ├── _forms.scss
│       │   └── _typography.scss
│       └── GainTime.scss
├── vendors
│   └── jquery-2.1.4.min.js
└── README.md
```

### Uso

A estilização do GainTime foi escrita em [SASS](http://sass-lang.com/). Aqui está a [documentação do SASS](http://sass-lang.com/documentation/file.SASS_REFERENCE.html).

### Vendors
O GainTime utiliza [JQuery](https://jquery.com/)
