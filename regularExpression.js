function panggilRegexp(value) {
  let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

  //Tulis Code Jawaban Kamu Di Bawah ini
  var hurufC = str.match(/[cC]/g);
  console.log(hurufC);
  var hurufK = str.match(/[kK]/g);
  console.log(hurufK);
  var hurufL = str.match(/[lL]/g);
  console.log(hurufL);

}

panggilRegexp()