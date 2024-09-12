#!/bin/bash
convert B1.png B2.png +append B1_png_B2_png.png
convert B1.png B3.png +append B1_png_B3_png.png
convert B1.png B4.png +append B1_png_B4_png.png
convert B2.png B1.png +append B2_png_B1_png.png
convert B2.png B3.png +append B2_png_B3_png.png
convert B2.png B4.png +append B2_png_B4_png.png
convert B3.png B1.png +append B3_png_B1_png.png
convert B3.png B2.png +append B3_png_B2_png.png
convert B3.png B4.png +append B3_png_B4_png.png
convert B4.png B1.png +append B4_png_B1_png.png
convert B4.png B2.png +append B4_png_B2_png.png
convert B4.png B3.png +append B4_png_B3_png.png

convert resize 50% *.png


# highlighted
declare -a arr=("A1" "A2" "A3" "A4" "B1" "B2" "B3" "B4")
for i in "${arr[@]}"
do
	echo composite ${i}_pun.png ${i}_neut.png -compose difference /tmp/difference.png
	composite ${i}_pun.png ${i}_neut.png -compose difference /tmp/difference.png
	composite ${i}_pun.png /tmp/difference.png -compose Plus ${i}_pun_pun.png
	rm -f /tmp/difference.png
	composite ${i}_rew.png ${i}_neut.png -compose difference /tmp/difference.png
	composite ${i}_rew.png /tmp/difference.png -compose Plus ${i}_rew_rew.png
	rm -f /tmp/difference.png
done
