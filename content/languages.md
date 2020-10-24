# Languages

Umami supports the display of different languages. Simply click the globe icon in the header to change your language.

<img src="/languages.png">

## Contributing

If you would like to contribute a lanuage translation to the project, please follow these steps.

### 1. Checkout the repo

```
git clone https://github.com/mikecao/umami.git
```

### 2. Create a language `.json` file

In the `/lang` folder there should be several `.json` files. Copy the `en-US.json` file into another file with the
proper ISO language code.

### 3. Translate the strings in the `.json` file

For example, here is the original English translation, [en-US.json](https://raw.githubusercontent.com/mikecao/umami/master/lang/en-US.json).

And here is it translated into German, [de-DE.json](https://raw.githubusercontent.com/mikecao/umami/master/lang/de-DE.json).

### 4. Finally, submit a pull request on [Github](https://github.com/mikecao/umami)

If you are not familiar with using git, you can simply create an [issue](https://github.com/mikecao/umami/issues) on Github
and paste your `.json` file contents and someone will merge it.