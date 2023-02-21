cargo build && wasm-pack build --target nodejs && cd pkg && yarn link && cd javascript && yarn link rust-wasm-rand
