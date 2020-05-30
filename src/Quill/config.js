  //so pra nao ficar botando as opcoes do quill tudo enfiado no index.js
  export const formats = [
			'font','size',
            'bold', 'italic', 'underline',
            'list', 'bullet', 'indent',
            'link', 'image', 'video'
        ];
  export const toolbarOptions = [
            [{ 'font': [] }],
			[{'size': []}],
			['bold', 'italic', 'underline'],        // toggled buttons

            [{'list': 'ordered'}, {'list': 'bullet'}],
            ['link', 'image', 'video'],

            //['clean']                                         // remove formatting button
        ];
  export const historic = {
            delay: 2000,
            maxStack: 500,
            userOnly: true
        };
  export var post = { text: 'POSTAGEM TESTE' } ;
  
  export const handleChange = function(value){
    post = { text: value };
	//console.log(post); upload to firebase
  }		
