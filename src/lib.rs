use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn parse(name: &str) -> i32 {
    return name.parse::<i32>().unwrap();
}
