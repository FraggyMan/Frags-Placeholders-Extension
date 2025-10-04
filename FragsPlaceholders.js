/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "placeHolders",
                "name": "Frag's Placeholders",
                "color1": "#5d4e5f",
                "blocks": [{
                    "opcode": "block_37bbb3d4db22308b",
                    "text": "Block",
                    "blockType": "command",
                    "arguments": {}
                }, {
                    "opcode": "block_ac39b98963359ec5",
                    "text": "[dc2c4792d9d32cd9]",
                    "blockType": "command",
                    "arguments": {
                        "dc2c4792d9d32cd9": {
                            "type": "string",
                            "defaultValue": "Write text here"
                        }
                    }
                }, {
                    "opcode": "block_151eb70855e0aff0",
                    "text": "Reporter",
                    "blockType": "reporter",
                    "arguments": {}
                }, {
                    "opcode": "block_390370a16b49cba8",
                    "text": "Boolean",
                    "blockType": "Boolean",
                    "arguments": {}
                }, {
                    "opcode": "block_9168dd243dba532d",
                    "text": "[78d53998546076df]",
                    "blockType": "reporter",
                    "arguments": {
                        "78d53998546076df": {
                            "type": "string",
                            "defaultValue": "Write text here"
                        }
                    }
                }, {
                    "opcode": "block_8451a00376a775ae",
                    "text": "[28a6b7152c289b8a]",
                    "blockType": "Boolean",
                    "arguments": {
                        "28a6b7152c289b8a": {
                            "type": "string",
                            "defaultValue": "Write text here"
                        }
                    }
                }]
            }
        }
        async block_37bbb3d4db22308b(args) {
            return (("0"))
        }
        async block_ac39b98963359ec5(args) {
            return (("0"))
        }
        async block_151eb70855e0aff0(args) {
            return (("0"))
        }
        async block_390370a16b49cba8(args) {
            return (("0"))
        }
        async block_9168dd243dba532d(args) {
            return (("0"))
        }
        async block_8451a00376a775ae(args) {
            return (("0"))
        }
    }

    let extension = new Extension();
    // code compiled from extforge

    Scratch.extensions.register(extension);
})(Scratch);