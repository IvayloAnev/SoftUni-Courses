function solve(input){
    let text = input.shift()
    
    while(input[0] != 'Reveal'){
    
    let tokens = input.shift().split(':|:')
    let command = tokens[0]
    let p1 = tokens[1]
    let p2 = tokens[2]
    
    if (command == 'InsertSpace'){
    let index = Number(p1)
    let left = text.slice(0,index)
    let right = text.slice(index)
    text = left + ' ' + right
    console.log(text)
    
    }else if (command == 'Reverse'){
    let substring = p1
    let index = text.indexOf(substring)
    if(index != -1){
    let left = text.slice(0,index)
    let right = text.slice(index+substring.length)
    text = right + left + substring.split('').reverse().join('')
    console.log(text)
    }else{
    console.log('error')
    }
    
    }else if (command == 'ChangeAll'){
    substring = p1
    let replacement = p2
    text = text.split(substring).join(replacement)
    console.log(text)
    
       }
    
     }
    console.log(`You have a new text message: ${text}`)
    }
    solve([
        'heVVodar!gniV',
        'ChangeAll:|:V:|:l',
        'Reverse:|:!gnil',
        'InsertSpace:|:5',
        'Reveal'
      ]
      )