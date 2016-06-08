credit belongs to [chemview](https://github.com/gabrielelanaro/chemview)

I adapt chemview test framework so [NGLView](https://github.com/arose/nglview) can use it.

How to test?

```bash
git clone https://github.com/arose/nglview
cd nglview
python setup.py install
git clone https://github.com/hainm/nbtests
jupyter notebook --port=8889 &
nightwatch
```
