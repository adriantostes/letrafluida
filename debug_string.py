
path = r"c:\My Web Sites\letrafluidacopy\letrafluida.com.br\assets\index-BY5pObJn.js"
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

keyword = "garrancho"
if keyword in content:
    idx = content.find(keyword)
    start = max(0, idx - 100)
    end = min(len(content), idx + 100)
    snippet = content[start:end]
    print(f"FOUND at {idx}")
    print("SNIPPET_RAW:")
    print(repr(snippet))  # repr mostra \n, \t e aspas reais
else:
    print("KEYWORD NOT FOUND")

keyword2 = "Beatriz Souza"
if keyword2 in content:
    idx = content.find(keyword2)
    start = max(0, idx - 50)
    end = min(len(content), idx + 200)
    snippet = content[start:end]
    print(f"FOUND DEPOIMENTO at {idx}")
    print("SNIPPET_DEPOIMENTO:")
    print(repr(snippet))
else:
    print("DEPOIMENTO NOT FOUND")
