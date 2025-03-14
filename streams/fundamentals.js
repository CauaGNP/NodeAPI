import { Readable, Writable, Transform } from "node:stream";

class oneToHundredStream extends Readable{
    index = 1;
    
    _read() {
        const i = this.index++;

        setTimeout(() => {
            if( i > 100){
                this.push(null);
            }else{
                const buf = Buffer.from(String(i));

                this.push(buf);
            }
        }, 1000);
    }
}

class mutiplyByTenStream extends Writable{
    _write(chunk, encoding, callback){
        console.log(Number(chunk.toString()) * 10);
        callback();
    }
}

class inverseNumber extends Transform{
    _transform(chunk, encoding, callback){
        const tranformed = Number(chunk.toString()) * 1;

        callback(null, Buffer.from(String(tranformed)))
    }
}

// O pipe tem a função de "conectar" as streams
// O stdout vai exibir na interface
new oneToHundredStream().pipe(new mutiplyByTenStream());