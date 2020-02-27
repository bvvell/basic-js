const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length();
  },
  addLink(value) {
    // this.chain.push(String(value));
    this.chain.push('( ' + String(value) + ' )');
    return this;
  },
  removeLink(position) {
    if (this.chain.length < position || position - 1 < 0 || typeof position !== 'number') {
      this.chain = [];
      throw new Error('error');
    } else {
      this.chain.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    // let result = '';
    // for (a = 0; a <= this.chain.length - 1; a++) {
    //   if (a === 0) {
    //     result += '( ' + this.chain[a] + ' )'
    //   } else {
    //     result += '~~( ' + this.chain[a] + ' )'
    //   }
    // }
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }

};

module.exports = chainMaker;