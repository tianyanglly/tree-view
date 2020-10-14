<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2019/1/21 0021
 * Time: 下午 4:06
 */

namespace TreeView\ViewModel;


abstract class ViewModel
{
    protected $tree_view;

    protected $sign;
    protected $column;
    protected $form = <<<EOF
<div id="dendrogram-form">
    <button id="dendrogram-form-close" type="button">
    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>
    </button>
    <div class="dendrogram-form-header">
        <h2 id="dendrogram-form-theme"></h2>
    </div>
    <div class="dendrogram-form-body">
        %s
    </div>
</div>
EOF;

    protected $guarded = ['id','left','right'];

    protected $icon = [
        'expand'=>'<svg class="dendrogram-icon" width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#fff" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle> <line fill="none" stroke="#fff" x1="9.5" y1="5" x2="9.5" y2="14"></line> <line fill="none" stroke="#fff" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>',
        'shrink'=>'<svg class="dendrogram-icon" width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <circle fill="none" stroke="#fff" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle> <line fill="none" stroke="#fff" x1="5" y1="9.5" x2="14" y2="9.5"></line></svg>',
        'grow'=>'<svg class="dendrogram-icon" width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#fff" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle><line fill="none" stroke="#fff" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"></line></svg>',
        'ban'=>'<svg class="dendrogram-icon" width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#fff" stroke-width="1.1" cx="9.5" cy="9.5" r="9"></circle><line fill="none" stroke="#fff" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"></line></svg>'
    ];

    public function __construct($column)
    {
        $this->sign = true;
        $this->column = $column;
    }

    abstract function index($data);
}
